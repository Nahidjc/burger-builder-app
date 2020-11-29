import { Formik } from 'formik';
import React, { Component } from 'react';

class Auth extends Component {
    render() {
        return (
            <div>
                <Formik
                    initialValues={
                        {
                            email: "",
                            password: "",
                            passwordConfirm: "",
                        }
                    }

                    onSubmit={
                        (values) => {
                            console.log(values);
                        }
                    }

                >
                    {
                        ({ values, handleChange, handleSubmit }) => (<div>
                            <form onSubmit={handleSubmit}>
                                <input name="email"
                                    placeholder="Enter Your Email"
                                    className="form-control"
                                    value={values.email}
                                    onChange={handleChange}
                                />
                                <br />
                                <input name="password"
                                    placeholder="Password"
                                    className="form-control"
                                    value={values.password}
                                    onChange={handleChange}
                                />
                                <br />
                                <input name="passwordConfirm"
                                    placeholder="Confirm Password"
                                    className="form-control"
                                    value={values.passwordConfirm}
                                    onChange={handleChange}
                                />
                                <br />
                                <button type className="btn btn-success">Sign Up</button>
                            </form></div>)
                    }
                </Formik>
            </div>
        );
    }

};

export default Auth;