import React from 'react';
import Dialog from '../Dialog/Dialog';
import Message from '../Message/Message';
import { UPDATE_NEW_MESSAGE_TEXT_AC, ADD_MESSAGE_AC } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {

    let onNewMessageTextChanged = (event) => {
        let text = event.target.value;

        props.dispatch(UPDATE_NEW_MESSAGE_TEXT_AC(text));
    }
    let onSendMessageClick = () => {
        props.dispatch(ADD_MESSAGE_AC());
    }

    return (
        <div className="dialogs">
            <ul className="dialogs__dialogs-list">
                { props.dialogs.dialogs.map(dialog => (
                    <li className="dialogs__dialogs-item">
                        <Dialog name={ dialog.name } id={ dialog.id } />
                    </li>
                )
                ) }
            </ul>

            <div className="dialogs__message-container">
                <ul className="dialogs__messages-list">
                    { props.dialogs.messages.map(message => (
                        <li className="dialogs__messages-item">
                            <Message message={ message.message } />
                        </li>
                    )) }
                </ul>
                <div className="dialogs__message-form">
                    <textarea onChange={ onNewMessageTextChanged } value={ props.dialogs.messageText } className="dialogs__textfield" />
                    <button onClick={ onSendMessageClick } type="button" className="dialogs__send-button">Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;