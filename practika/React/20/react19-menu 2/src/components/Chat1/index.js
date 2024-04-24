import React from 'react';

const store = {
  users: [
    {
      id: 1,
      name: 'Ivan Ivanov'
    },
    {
      id: 3,
      name: 'Petr Petrov'
    },
    {
      id: 5,
      name: 'Stepan Stepanov'
    }
  ],
  messages: [
    {
      id: 1,
      body: 'message #1',
      authorId: 1
    },
    {
      id: 1,
      body: 'message #2',
      authorId: 3
    },
    {
      id: 3,
      body: 'message #3',
      authorId: 1
    },
    {
      id: 4,
      body: 'message #4',
      authorId: 5
    }
  ]
}

const Chat1 = () => {
  return (
    <div>
      {
        store.messages.map(message => {
          return (
            <p>
              {message.body}
              {"-->"}
              {store.users.find(user => user.id === message.authorId).name}
            </p>
          )
        })
      }
    </div>
  );
}

export default Chat1;
