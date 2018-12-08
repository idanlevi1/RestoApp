import React from 'react';
import HomeView from './HomeView'
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    return (
      <HomeView user={this.props.user}/>
    );
  }
}

const mapStateToProps = state => {
  return {
      user: state.user.user //We don't user 'user' for now, we can return {} if we want 
  }
}

export default connect(mapStateToProps)(Home);