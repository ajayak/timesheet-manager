import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import { keys } from 'lodash';

const propTypes = {
  accept: React.PropTypes.string,
  label: React.PropTypes.any,
  multi: React.PropTypes.bool,
  onUpload: React.PropTypes.func.isRequired,
  passBase64: React.PropTypes.bool
};

const defaultProps = {
  label: 'Upload image',
  multi: false,
  accept: null,
  passBase64: false
};

export default class Component extends React.Component {

  constructor(props) {
    super(props);
    this.openFileDialog = this.openFileDialog.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  openFileDialog() {
    const fileInputDom = ReactDOM.findDOMNode(this.refs.input);
    fileInputDom.click();
  }

  handleFile(event) {
    keys(event.target.files).map((index) => {
      const file = event.target.files[index];

      if (this.props.passBase64) {
        const reader = new FileReader();
        reader.onload = (upload) => {
          const base64 = upload.target.result;
          this.props.onUpload(file, base64);
        };

        reader.readAsDataURL(file);
      } else {
        this.props.onUpload(file);
      }
    });
  }

  render() {
    return (
      <div>
        <RaisedButton
          label={this.props.label}
          onClick={this.openFileDialog}
        />
        <input
          type="file"
          multiple={this.props.multi}
          style={{ display: 'none' }}
          ref="input"
          accept={this.props.accept}
          onChange={this.handleFile}
        />
      </div>
    );
  }

}

Component.propTypes = propTypes;
Component.defaultProps = defaultProps;
