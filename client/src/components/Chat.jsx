import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
let socket;

const Chat = () => {

    const urlParams = useParams();

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const ENDPOINT = 'localhost:9000';


    //get the data from the url params when the component is rendered first
    useEffect(() => {

        //get the url params
        setName(urlParams.name);
        setRoom(urlParams.room);

        const socket = io(ENDPOINT);
        socket.emit('message','hello from the react client')
    }, [ENDPOINT,{name,room}]);



    return (
        <div>
            chat
        </div>
    );
}

export default Chat;
