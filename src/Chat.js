import {Avatar, IconButton} from "@material-ui/core";
import React, {useState,useEffect} from "react";
import "./Chat.css"
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined, Mic } from "@material-ui/icons";

function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");

    useEffect(() => {
       setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const sendMessage = (e) =>{
      e.preventDefault();
      console.log("You typed >>> ", input);
      setInput("");
    }

    return(
    <div className="chat">

        <div className="chat__header">
           <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}/>
           
           <div className="chat__headerInfo">
            <h3>Room Name</h3>
            <p>Last seen at...</p>
           </div>

           <div className="chat__HeaderRight">
                <IconButton>
                  <SearchOutlined/>
                </IconButton>
                <IconButton>
                  <AttachFile/>
                </IconButton>
                <IconButton>
                  <MoreVert/>
                </IconButton>
           </div>
        </div>

        <div className="chat__body">
          <p className={`chat__message ${true && "chat__reciever"}`}>
          <span className="chat__name">Rishabh Rai</span>
          Hey Guys
          <span className="chat__timestamp">3:35pm</span>
          </p>
        </div>

        <div className="chat__footer">
          <InsertEmoticon/>
          <form>
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Type a message"/>
            <button onClick={sendMessage} type="submit">Send a message</button>
          </form>
          <Mic/>
        </div>
    </div>
    );
}

export default Chat
