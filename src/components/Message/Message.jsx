import React from 'react';

// props содержит message - сообщение, которое отправляет пользователь

const Message = (props) => {
    return (
        <div className="message">
            <div className="message__avatar">
                <img className="message__img" src="./assets/img/avatar.jpg" alt="Аватар"/>
            </div>

            <div className="message__message">
                <p className="message__text">{props.message}</p>
            </div>
        </div>
    )
}

export default Message;