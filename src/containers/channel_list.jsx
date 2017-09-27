import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectChannel } from '../actions';

class ChannelList extends Component {

  handleClick = (channel) => {
    this.props.selectChannel(channel);
  }

  renderList = () => {
    return this.props.channels.map((channel) => {
      if (channel == this.props.selectedChannel) {
        return (<p key={channel} onClick={() => this.handleClick(channel)}><strong>{channel}</strong></p>)
      } else {
        return (<p key={channel} onClick={() => this.handleClick(channel)}>{channel}</p>)
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
    { selectChannel: selectChannel }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (ChannelList);
