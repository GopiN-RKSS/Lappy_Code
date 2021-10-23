import React, { Component } from 'react';
import { Button, Row, Col, Form, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchLoginInput, loginUser } from '../../Store/login/login';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import SimpleReactValidator from 'simple-react-validator';

toast.configure()

class Login extends Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator({ autoForceUpdate: this });
        this.state = {
            errorMessage: '',
            username: '',
            password: '',
            spinner: false
        }
    }

    navigateTo = () => {
        this.props.history.push('/dashboard')
    }

    handleUserInput = (event, key) => {
        let user = {
            key: key,
            value: event.currentTarget.value
        }
        if (key === "username") {
            this.setState({ email: event.currentTarget.value });
        }
        else {
            this.setState({ password: event.currentTarget.value });
        }
        this.props.fetchLoginInput(user);
    }

    handleLoginButton = (e) => {
        e.preventDefault();
        this.setState({
            spinner: true
        })
        if (this.validator.allValid()) {
            this.props.loginUser(this.props.login.loginDetails);
        }
        else {
            this.setState({
                spinner: false
            })
            this.validator.showMessages();
        }
    }

    componentWillReceiveProps(nextProps) {
        const { history } = this.props;
        if (nextProps.login.loginCheck === true) {
            this.setState({
                spinner: false
            })
            this.props.history.push('/dashboard/newdashboard');
        }
        else if (nextProps.login.loginCheck === false) {
            this.setState({
                spinner: false
            })
            swal({
                title:'Invalid Credentials!',
                 text:'Please check login details and try again.'              
            })            
        }
        nextProps.login.loginCheck = null;
    }

    render() {
        const bigsLogo = {
            height: "100px",
            margin: "20px"
        };
        return (

            <div class="wrapper wrapper-login">
                <div class="row">
                    <div class="col-md-12">
                    </div>
                </div>

                <div className="login-sec">
                    <center>
                        {this.state.spinner && 
                            <Spinner className="App text-center" style={{ display: "block" }}
                            animation="border"
                            role="status"
                            variant="light">
                        </Spinner>}
                    </center>
                    <center>
                        <img class="img-fluid"
                            src={`${process.env.PUBLIC_URL}/img/bigsconnect.png`}
                            alt="logo" style={{ height: '100px', margin: '20px' }} />
                    </center>

                    <div className="FormDiv">
                        <form class="col" onSubmit={this.handleLoginButton}>
                            <div class="login-details-fields-new" >
                                <label className="login-labels" >
                                    Username
                                    </label>
                                <div>
                                    <div className="mb-4">
                                        <input style={{ width: "60vh" }} type="text" class="form-control mb-0" placeholder="Username" name="username" value={this.state.email}
                                            onChange={(event) => { this.handleUserInput(event, 'username') }} />
                                        <span className="text-danger">{this.validator.message("username", this.state.email, "required")}</span>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div className="login-details-fields-new ">
                                    <label className="login-labels">
                                        Password
                                    </label>

                                    <div className="mb-4">
                                        <input style={{ width: "60vh" }} type="password" placeholder="Password" class="form-control mb-0" name="password" value={this.state.password}
                                            onChange={(event) => { this.handleUserInput(event, 'password') }} />
                                        <span className="text-danger">{this.validator.message("password", this.state.password, "required")}</span>

                                    </div>
                                </div>

                            </div>
                            <div class="login-details-fields-new col" style={{ margin: "10px" }}>
                                <div class="app col">
                                    <div class="ButtonParent" >
                                        <button type="submit" class="btn btn-info btn-login">
                                            Login
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        );
    }
}

export const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps, { fetchLoginInput, loginUser })(Login);
