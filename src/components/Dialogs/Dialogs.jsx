import React from 'react';
import Dialog from '../Dialog/Dialog';
import Message from '../Message/Message';

const Dialogs = (props) => {

    return (
        <div className="dialogs">
            <ul className="dialogs__dialogs-list">
                {props.dialogs.dialogs.map(dialog => (
                    <li className="dialogs__dialogs-item">
                        <Dialog name={dialog.name} id={dialog.id} />
                    </li>
                )
                )}
            </ul>

            <ul className="dialogs__messages-list">
                {props.dialogs.messages.map(message => (
                    <li className="dialogs__messages-item">
                        <Message message={message.message} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Dialogs;