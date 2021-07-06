import React from "react";
import { Field, reduxForm } from "redux-form";

class streamForm extends React.Component {
  renderError = (meta) => {
    if (meta.touched && meta.error) {
      return (
        <div className="ui error message">
          <div>{meta.error}</div>
        </div>
      );
    }
  };

  renderInput = (formProps) => {
    const class_name = `field ${
      formProps.meta.error && formProps.meta.touched ? " error" : ""
    }`;
    return (
      <div className={class_name}>
        <label>{formProps.label}</label>
        <input {...formProps.input} />
        {this.renderError(formProps.meta)}
      </div>
    );
  };

  onSubmit = (values) => {
    this.props.onSubmit(values);
  };

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "Please enter a title";
  }

  if (!formValues.description) {
    errors.description = "Please enter a description";
  }
  return errors;
};

export default reduxForm({ form: "streamCreate", validate })(streamForm);