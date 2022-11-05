import { Avatar, IconButton } from "@material-ui/core";
import { Chat, DonutLarge, MoreVert, SearchOutlined } from "@material-ui/icons";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import db from "./firebase";
import './Sidebar.css';
import SidebarChat from './SidebarChat';

function Sidebar() {
  const [rooms, setRooms] = useState([]);

  // useEffect(() => {
  //   db.collection('rooms').onSnapshot((snapshot) => 
  //     setRooms(snapshot.doc.map((doc) =>
  //       ({
  //         id: doc.id,
  //         data: doc.data(),

  //       }))
  //     )
  //   );
  // }, [])

    return(
    <div className="sidebar">
        <div class="sidebar__header">
           <Avatar />
            <div class="sidebar__headerRight">
                <IconButton>
                  <DonutLarge/>
                </IconButton>
                <IconButton>
                  <Chat/>
                </IconButton>
                <IconButton>
                  <MoreVert/>
                </IconButton>
            </div>
        </div>     

        <div class="sidebar__search">
           <div class="sidebar_searchContainer">
            <SearchOutlined/>
            <input placeholder="Search or Start new chat" type="text"/>
           </div>
        </div>

        <div class="sidebar__chats">
        <SidebarChat addNewChat/>
        {rooms.map(room => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
        ))}
        </div>
    </div>
    );
}

export default Sidebar;
