import React from 'react';
import MessageList from '../containers/message_list'
import MessageForm from '../containers/message_form'

const App = () => {
  return (
    <div className="app">
      <MessageForm />
      <MessageList />
    </div>
  );
};

export default App;
