import {Avatar, IconButton} from "@material-ui/core";
import React, {useState,useEffect} from "react";
import "./Chat.css"
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";

function Chat() {
    const [seed, setSeed] = useState("");

    useEffect(() => {
       setSeed(Math.floor(Math.random() * 5000));
    }, []);

    return(
    <div className="chat">

        <div className="chat__header">
           <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}/>
           
           <div className="chat__headerInfo">
            <h3>Room Name</h3>
            <p>Last seen at...</p>
           </div>

           <div className="chat__HeaderRight">
            <h1>rishabh</h1>
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
          <p className="chat__message">Hey Guys</p>
        </div>

        <div className="chatfooter">

        </div>
    </div>
    );
}

export default Chat
