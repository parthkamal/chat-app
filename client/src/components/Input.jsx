import React from 'react';

import '../style/Input.css';

const Input = ({ message, setMessage, sendMessage }) => {
    return (
        <form className='form-container'>
            <input className='send-input'
                placeholder='type the message here'
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyDown={(event) => (event.key === 'Enter') ? sendMessage(event) : null}
            />
            <button onClick={(e)=>sendMessage(e)} className='send-button'>send</button>
        </form>
    );
}

export default Input;
