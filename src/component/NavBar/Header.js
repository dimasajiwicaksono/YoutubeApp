import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavbarBrand, Col, Button } from 'react-bootstrap';
import LoginModal from '../Form/Login/LoginModal';
import RegisterModal from '../Form/Register/RegisterModal';

export class Header extends Component {

    onHandleClick=()=> {
        localStorage.clear();
        window.location.href='/'
    }
    render() {
        return (
            <div className='header' style={styles.body} >
                <Navbar >
                    <Col md={6}>
                        <NavbarBrand ><Link to = '/' style={styles.brand}>YouApp</Link></NavbarBrand>
                    </Col>
                    <Col md={6}>
                        <Nav >
                            
                            {localStorage.getItem('email') ?
                                (
                                <div className='nav-group row'>
                                    <span><p style={styles.email}>{localStorage.getItem('email')}</p></span>
                                    <Button variant='outline-light' style={styles.button}>
                                        <Link to = '/share' style={styles.link}>Share a Video</Link>
                                    </Button>
                                    <Button
                                        onClick={this.onHandleClick} 
                                        style={styles.button}> Logout</Button>
                                </div>)
                                :
                                (
                                <div className='nav-group row'>
                                    
                                    <LoginModal />,
                                    <RegisterModal />
                                </div>)
                        }
                        </Nav>
                    </Col>
                    
                </Navbar>
            </div>
        )
    }
}

const styles = {
    body : {
        backgroundColor : 'red',
        position:'sticky'
    },
    link : {
        textDecoration : 'none',
        color : 'black'
    },
    brand : {
        textDecoration : 'none',
        color: 'white',
        fontWeight : 'bold',
        fontSize : '2em'
    },
    button : {
        borderRadius: 20,
        marginRight : 10,
        marginLeft : 10
    },
    email : {
        color: 'white',
        marginTop : 10
    }
}


export default Header
