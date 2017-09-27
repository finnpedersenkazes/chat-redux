import React from 'react';

const Message = (props) => {
  return (
    <div>
      <p><strong>{props.message.author}</strong> - <i>{props.message.created_at}</i></p>
      <p>{props.message.content}</p>
    </div>
  );
};

export default Message;
