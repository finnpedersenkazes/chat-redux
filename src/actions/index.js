// TODO: add and export your own actions
export const SET_MESSAGES = 'SET_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const SELECT_CHANNEL = 'SELECT_CHANNEL';

export function selectChannel(channel) {
  return {
    type: 'SELECT_CHANNEL',
    payload: channel
  };
}

export function fetchMessages(selectedChannel) {
  const url = `https://wagon-chat.herokuapp.com/${selectedChannel}/messages`;
  console.log('fetchMessages: ' + url);
  const promise = fetch(url)
    .then(response => response.json());

  return {
    type: SET_MESSAGES,
    payload: promise
  };
}

export function createMessage(selectedChannel, author, content) {
  const url = `https://wagon-chat.herokuapp.com/${selectedChannel}/messages`;
  console.log('createMessage: ' + url);
  const body = { 'author': author, 'content': content };
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: CREATE_MESSAGE,
    payload: promise
  };
}
