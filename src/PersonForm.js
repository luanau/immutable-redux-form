import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, propTypes } from 'redux-form/immutable';

import {getPerson} from './person';


const renderField = field => (
    <div className="col-sm-4">
      <input {...field.input} className="form-control"/>
      {field.touched && field.error && <div className="error">{field.error}</div>}
    </div>
);

class PersonForm extends Component {

    static propTypes = {
        ...propTypes,
        // other props you might be using
    }

    componentDidMount() {
        this.handleInitialize();
    }

    handleInitialize() {
    }

    handleFormSubmit(formProps) {
        formProps = formProps;
    }

    render() {
        const inputWidth = {"className": "col-sm-4"};
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.handleFormSubmit.bind(this))} className="form-horizontal">
                    <div className="form-group">
                        <label className="col-sm-2 control-label" htmlFor="FirstName">First Name:</label>
                        <Field name="FirstName" type="text" component={renderField}/>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label" htmlFor="LastName">Last Name:</label>
                        <Field name="LastName" type="text" component={renderField}/>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label" htmlFor="MiddleName">Middle Name:</label>
                        <Field props={inputWidth} name="MiddleName" type="text" component={renderField}/>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label" htmlFor="Gender">Gender:</label>
                        <div className="col-sm-4">
                            <Field name="Gender" component="select" className="form-control">
                                <option/>
                                <option name="Male">Male</option>
                                <option name="Female">Female</option>
                            </Field>
                        </div>
                    </div>
                    <button action="submit" className="btn btn-info col-sm-offset-2">Save changes</button>
                </form>
            </div>
        );
    }
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
let boundPersonForm = reduxForm({
  form: 'Person',  // a unique identifier for this form
  enableReinitialize: true
//   fields: ['FirstName', 'LastName', 'MiddleName', 'Gender'],
})(PersonForm);

//You have to connect() to any reducers that you wish to connect to yourself
export default connect(
  state => ({
    initialValues: getPerson(state), // pull initial values from account reducer
  })
)(boundPersonForm);