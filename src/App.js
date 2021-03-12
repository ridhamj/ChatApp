import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />


    return (
        <ChatEngine
         height="100vh"
         projectID="655aee27-b82c-4fe8-8699-33c7ec84ec16"
         userName={localStorage.getItem('username')}
         userSecret={localStorage.getItem('password')}
         renderChatFeed= {(ChatAppProps) => <ChatFeed {...ChatAppProps} />}
        />
    );
}

export default App;