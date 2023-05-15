import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Join.css';

//we use link because link does not refresh the page (it changes the virtual dom best for spa)

const Join = () => {

    //states 
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    //handlers
    const handleName =(event)=>{
        setName(event.target.value);
    }

    const handleRoom = (event) => {
        setRoom(event.target.value);
    }

    const handleSubmit = (event) => {
        if (!name || !room) event.preventDefault();
    }







    //placeholders
    const namePlaceholder = 'enter your name here'; 
    const roomPlaceholder = 'enter your room here';

    return (
        <div className='join-outer-container'>
            <div className='join-inner-container'>
                <h1 className='heading'>
                    Join
                </h1>
                <div>
                <input placeholder={namePlaceholder} className='join-input' onChange={(e)=>handleName(e)}/>
                </div>
                <div>
                <input placeholder={roomPlaceholder} className='join-input' onChange={(e)=>handleRoom(e)}/>
                </div>

                <Link onClick={(event) => handleSubmit(event)} to={`/chat/${room}/${name}`}>
                    <button className='button' type='submit'>Join</button>
                </Link>


            </div>
        </div>
    );
}

export default Join;
