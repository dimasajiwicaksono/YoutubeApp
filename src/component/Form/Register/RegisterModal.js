import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';
import Register from '../Register/Register'


export class RegisterModal extends Component {
    
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
                <Button onClick={this.handleShow} style={styles.button}>Register</Button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Register handleClose={this.handleClose}/>
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
        marginLeft : 10
    }

}


export default RegisterModal
