import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';
import Login from '../Login/Login'


export class LoginModal extends Component {
    constructor(){
        super();

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.state = {
            show : false
        }
    }

    handleClose=()=> {
        this.setState({
            show:false
        })
    }

    handleShow=()=>{
        this.setState({
            show:true
        })
    }
    render() {
        return (
            <div>
                <Button variant ='outline-light'
                    onClick={this.handleShow} 
                    style = {styles.button}> Login</Button>
                <Modal show={this.state.show} onHide={this.handleClose} size ='md'>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Login handleClose={this.handleClose}/>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}


const styles = {
    button : {
        borderRadius: 20,
        marginRight : 10,
        marginLeft : 10,
        width : 80
    }

}
export default LoginModal
