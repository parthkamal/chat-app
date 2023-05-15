import React, { useEffect, useState } from 'react';
import { UNSAFE_DataRouterContext, useParams } from 'react-router-dom';
import io from 'socket.io-client';
let socket;

const Chat = () => {


    const [Name, setName] = useState('');
    const [Room, setRoom] = useState('');
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const urlParams = useParams();
    const ENDPOINT = 'localhost:9000';


    const setStates = ({ name, room }) => {

        setName(name);
        setRoom(room);

        console.log({ Name, Room });
    }


    //get the data from the url params when the component is rendered first
    useEffect(() => {
        //get the url params
        const { name, room } = urlParams;

        setStates({ name, room });
        socket = io(ENDPOINT);
        socket.emit('join', { name, room });
    }, []);

    //set the messages 
    useEffect(() => {
        socket.on('message', message => {
            console.log(message);
            setMessages(messages => [...messages, message]);
        });
    }, []);



    const sendMessage = (event) => {
        event.preventDefault();
        //emit the sendMessage event    
        if (message) socket.emit('sendMessage', message, () => setMessage(''));
    }




    return (
        <div className='outer-container'>
            <div className='container'>
                <input
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyDown={(event) => (event.key === 'Enter') ? sendMessage(event) : null}
                />
            </div>

        </div>
    );
}

export default Chat;
