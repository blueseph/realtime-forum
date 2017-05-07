import { connect, } from 'react-redux';
import { bindActionCreators } from 'redux';
import Landing from './landing.component';

import * as TopicActionCreators from './topic-list/topic-list.redux';

function mapStateToProps(state) {
  return {
    topics: state.topics,
  }
};

const mapDispatchToProps = dispatch => ({
  actions: {
    topics: bindActionCreators(TopicActionCreators, dispatch),
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
