import { connect } from 'react-redux';
import PollShow from './poll_show';
import { fetchPoll } from '../../actions/poll_actions';

const mstp = (state, ownProps) => {
  return {
    poll: state.polls[ownProps.match.params.id],
    loggedIn: state.session.isAuthenticated
  }
}

const mdtp = dispatch => {
  return {
    fetchPoll: pollId => dispatch(fetchPoll(pollId))
  }
}

export default connect(mstp, mdtp)(PollShow);