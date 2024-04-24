import React, { useEffect } from 'react';
import { useReducer } from 'react';
import { reducer } from './reducer';

const Chat2 = () => {
  const [state, dispatch] = useReducer(reducer, {
    messagesWithAuthor: [],
    error: null
  })
  console.log(state);
  useEffect(() => {
    fetch('./chat.json')
      .then(response => response.json())
      .then(data => dispatch({
        type: "success",
        data
      }))
      .catch(error => dispatch({
        type: "error",
        error
      }))
  }, [])
  return (
    <div>
      <h2>Chat2</h2>
      {
        state.messagesWithAuthor.map(m => (
          <article key={m.messageId}>
            <p>{m.messageText}:{m.author}</p>
          </article>
        ))
      }
    </div>
  );
}

export default Chat2;
//{message: "message #1", author: "Ivan Ivavnov"}
