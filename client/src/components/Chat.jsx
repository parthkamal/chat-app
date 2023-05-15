import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
let socket;

const Chat = () => {

    const urlParams = useParams();

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [messages,setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const ENDPOINT = 'localhost:9000';


    //get the data from the url params when the component is rendered first
    useEffect(() => {

        //get the url params
        setName(urlParams.name);
        setRoom(urlParams.room);

        const socket = io(ENDPOINT);
        socket.emit('join',{name, room})
    }, [ENDPOINT,{name,room}]);

    //set the messages 
    useEffect(()=> {
        socket.on('message', (message)=>{
            setMessages([...messages, message])
        })
    }, [messages]);



    return (
        <div>
            
        </div>
    );
}

export default Chat;
