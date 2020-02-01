import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

export class Login extends Component {

    constructor(){
        super();

        this.onChangeEmail = this.onChangeEmail.bind(this); 
        this.onChangePassword = this.onChangePassword.bind(this)
        this.state={
            email : '',
            password : '',
            message : true
        }
    }

    // <--- form event --> 
    onChangeEmail(e){
        this.setState({
            email : e.target.value
        })
    }

    onChangePassword(e){
        this.setState({
            password : e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault()
        this.setState({
            email : '',
            password : '',
        })
    }

    onHandleClick=()=> {
        const { email, password, message } = this.state;
        this.props.handleClose()
        localStorage.setItem ('email', email);
        localStorage.setItem('password', password)
        localStorage.setItem('message', message);
        window.location.reload();
        
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <div className='form-group email'>
                        <label>Email</label> 
                        <input type ='email' 
                        className='form-control'
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        required
                        />
                    </div>
                    <div className='form-group password'>
                        <label>Password</label> 
                        <input type ='password' 
                        className='form-control'
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        required
                        />
                    </div>
                    <Button onClick={this.onHandleClick}> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default Login;
