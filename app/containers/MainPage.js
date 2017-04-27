import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Main from '../components/Main';
import * as FileActions from '../actions/fileActions';

const validate = values => {
  const errors = {};
  const requiredFields = ['code', 'employeeId'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  return errors;
};

function onFormSubmit(values) {
  console.log(values);
}

function mapStateToProps(state) {
  return {
    file: state.file
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(FileActions, dispatch),
    onFormSubmit
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({
  form: 'main',
  validate
})(Main));
