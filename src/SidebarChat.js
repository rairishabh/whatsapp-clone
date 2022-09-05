import { Avatar } from '@material-ui/core';
import React, {useEffect,useState} from 'react';
import './SidebarChat.css';

function SidebarChat({ addNewChat}) {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = () => {
        const roomName = prompt("please enter a room name");

        if(roomName)
        {
            // Do some database stuff here
        }
    };

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>last message...</p>
            </div>     
        </div>
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>
    )
}

export default SidebarChat