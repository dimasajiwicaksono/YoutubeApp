import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

export class Register extends Component {
    constructor(){
        super();

        this.onChangeUsername = this.onChangeUsername.bind(this); 
        this.onChangeEmail = this.onChangeEmail.bind(this); 
        this.onChangePassword = this.onChangePassword.bind(this)
        this.state={
            email : '',
            password : '',
            username : '',
            message : true
        }
    }

    // <--- form event --> 
    onChangeUsername(e){
        this.setState({
            username : e.target.value
        })
    }
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
            username : '',
        })
    }

    onHandleClick=()=> {
        const { username, email, password, message } = this.state;
        this.props.handleClose()
        localStorage.setItem ('username', username);
        localStorage.setItem ('email', email);
        localStorage.setItem('password', password)
        localStorage.setItem('message', message);
        window.location.reload();
        
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <div className='form-group username'>
                        <label>Username</label> 
                        <input type ='username' 
                        className='form-control'
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        required
                        />
                    </div>
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
                        <label>password</label> 
                        <input type ='password' 
                        className='form-control'
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        required
                        />
                    </div>
                    <Button onClick={this.onHandleClick}> Register</Button>
                    <br />
                    <div className='footer'>
                        <p>Already have account Log in </p>
                    </div>
                </Form>
            </div>
        )
    }
}


export default Register
