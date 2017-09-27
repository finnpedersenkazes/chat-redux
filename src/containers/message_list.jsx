import React, { Component } from 'react';
import Message from '../components/message'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';

class MessageList extends Component {

  componentWillMount() {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  renderList = () => {
    return this.props.messages.map((message) => {
      return (
        <Message key = {`${message.created_at} ${message.author}`} message={message} />
      )
    })
  }

  render() {

    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

//dispatch déclenche le calcul du nouveau state
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages: fetchMessages },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (MessageList);
