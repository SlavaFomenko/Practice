export function reducer(state, action) {
  switch (action.type) {
    case "success":
      const { data: { users, messages } } = action;
      const usersMap = new Map();
      users.forEach(user => usersMap.set(user.id, user));
      const messagesWithAuthor = messages.map(message => (
        {
          messageText: message.body,
          author: usersMap.get(message.authorId).name,
          messageId: message.id
        }
      ))
      return {
        ...state,
        messagesWithAuthor
      }
    case "error":
      const { error } = action;
      return {
        ...state,
        error
      }
    default:
      return state;
  }
}