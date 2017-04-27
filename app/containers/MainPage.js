import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/Main';
import * as FileActions from '../actions/fileActions';

function mapStateToProps(state) {
  return {
    file: state.file
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(FileActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
