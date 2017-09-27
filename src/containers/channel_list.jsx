import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectChannel, fetchMessages } from '../actions';

class ChannelList extends Component {

  handleClick = (channel) => {
    this.props.selectChannel(channel);
    this.props.fetchMessages(channel);
  }

  renderList = () => {
    return this.props.channels.map((channel) => {
      if (channel == this.props.selectedChannel) {
        return (<p key={channel} onClick={() => this.handleClick(channel)} className="selectedChannel">{channel}</p>)
      } else {
        return (<p key={channel} onClick={() => this.handleClick(channel)} className="unselectedChannel">{channel}</p>)
      }
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

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectChannel: selectChannel,
      fetchMessages: fetchMessages
     }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (ChannelList);
