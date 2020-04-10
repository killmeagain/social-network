import Dialogs from './Dialogs';
import { UPDATE_NEW_MESSAGE_TEXT_AC, ADD_MESSAGE_AC } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';


// Прокидывает в props данные из state в сторе
const mapStateToProps = state => {
    return {
        // Текст, который набирается в текстовом поле
        messageText: state.dialogsPage.messageText, 
        //  Все сообщения (Массив объектов)
        messages: state.dialogsPage.messages,
        //  Все Люди/Диалоги (Массив объектов)
        dialogs: state.dialogsPage.dialogs
    }
}

// Прокидывает колбэки из стора
const mapDispatchToProps = dispatch => {
    return {
        // Функция, которая выполняется при срабатывании события onChange в текстовом поле
        onNewMessageTextChanged: (text) => {
            dispatch(UPDATE_NEW_MESSAGE_TEXT_AC(text));
        },
        // Функция, которая выполняется при срабатывании события onClick на кнопке отправки сообщения
        onSendMessageClick: () => {
            dispatch(ADD_MESSAGE_AC())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


// Самопальная контейнерная компонента
// const DialogsContainer = (props) => {

//     const { store }      = props;
//     const state          = store.getState();
//     const messageText    = state.dialogsPage.messageText;
//     const messages       = state.dialogsPage.messages;
//     const dialogs        = state.dialogsPage.dialogs;


//     let onNewMessageTextChanged = (text) => {
//         store.dispatch(UPDATE_NEW_MESSAGE_TEXT_AC(text));
//     }
//     let onSendMessageClick = () => {
//         store.dispatch(ADD_MESSAGE_AC());
//     }

//     return (
//         <Dialogs 
//             onNewMessageTextChanged   = { onNewMessageTextChanged } 
//             onSendMessageClick        = { onSendMessageClick } 
//             messageText               = { messageText }
//             messages                  = { messages }
//             dialogs                   = { dialogs }
//         />
//     )
// }


export default DialogsContainer;