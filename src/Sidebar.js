import { Avatar, IconButton } from "@material-ui/core";
import { Chat, DonutLarge, MoreVert, SearchOutlined } from "@material-ui/icons";
import React from "react";
import './Sidebar.css';
import SidebarChat from './SidebarChat';

function Sidebar() {
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
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        </div>
    </div>
    );
}

export default Sidebar;
