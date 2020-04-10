import React from 'react';
import Dialog from '../Dialog/Dialog';
import Message from '../Message/Message';

const Dialogs = (props) => {
    // Деструктуризация props, которые нужны этой компоненте. Все они описаны в контейнерной компоненте.
    const { onNewMessageTextChanged, onSendMessageClick, messageText, messages, dialogs } = props; 

    // Мапим массив с сообщениями в массив с элементами JSX
    let messagesElements = messages.map(message => {
        return (
            <li className="dialogs__messages-item">
                <Message message={message.message} />
            </li>
        )
    });

    // Мапим массив с диалогами в массив с элементами JSX
    let dialogsElements = dialogs.map(dialog => {
        return (
            <li className="dialogs__dialogs-item">
                <Dialog name={dialog.name} id={dialog.id} />
            </li>
        )
    });
    // Обработчик текстового поля на событие onChange
    let handlerTextAreaChange = (event) => {
        let text = event.target.value;

        onNewMessageTextChanged(text);
    };

    // Обработчик кнопки на событие onClick
    let handlerButtonClick = () => {
        onSendMessageClick();
    }

    // Возвращаем JSX
    return (
        <div className="dialogs">
            <ul className="dialogs__dialogs-list">
                { dialogsElements }
            </ul>

            <div className="dialogs__message-container">
                <ul className="dialogs__messages-list">
                    { messagesElements }
                </ul>
                <div className="dialogs__message-form">
                    <textarea 
                        onChange        = {handlerTextAreaChange}
                        value           = {messageText} 
                        className       = "dialogs__textfield" />
                    <button 
                        onClick         = {handlerButtonClick} 
                        type            = "button" 
                        className       = "dialogs__send-button">Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;