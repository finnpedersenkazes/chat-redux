// TODO: add and export your own actions
export const SET_MESSAGES = 'SET_MESSAGES';

export function fetchMessages(selectedChannel) {
  const url = `https://wagon-chat.herokuapp.com/${selectedChannel}/messages`;
  console.log(url);
  const promise = fetch(url)
    .then(response => response.json());

  return {
    type: SET_MESSAGES,
    payload: promise
  };
}

export function createMessage(channel, author, content) {
  // TODO
}
