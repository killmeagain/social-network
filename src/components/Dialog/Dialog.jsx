import React from 'react';
import { NavLink } from 'react-router-dom';

// props содержит id - идентификатор диалога, name - имя пользователя, с которым идет диалог

const Dialog = (props) => {
    return (
        <div className="dialog">
            <NavLink className="dialog__name" to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog;