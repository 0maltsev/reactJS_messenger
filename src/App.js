import { ChatEngine } from 'react-chat-engine';
import ChatFeed  from './components/ChatFeed';
import LoginForm from "./components/LoginForm";
import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
  return(
      <ChatEngine
        height="100vh"
        projectID="1934b0f7-4741-4705-a057-8db45f1091ed"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
      />
  );
}

export default App;
