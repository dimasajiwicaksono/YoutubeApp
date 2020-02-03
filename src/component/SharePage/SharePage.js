import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

import Header from '../NavBar/Header'

export class SharePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='container' style={styles.body}>
                    <div>
                        <Form style={styles.form}>
                        <label><strong>Youtube Url</strong></label>
                            <div className='form-group url'>
                               
                                <input tyle='submit' style={styles.input}/>
                            </div>
                        </Form>
                    </div>
                    <div className='btn-submit' >
                        <Button variant ='outline-danger' style={styles.button} >Share Video</Button>
                    </div>

                </div>
            </div>
        )
    }
}

const styles = {
    body : {
        display:'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems:'center',
        border: "1px solid black",
        borderRadius : 12,
        top : '50%',
        left : '50%',
        position : 'fixed',
        width: 600,
        marginLeft : -300,
        marginRight: -150
    },
    form : {
        marginTop: 50,
    },
    button : {
        marginBottom: 50,
        marginTop: 20,
        width : 200,
        borderRadius : 20
    },
    input : {
        border : 'none',
        borderBottom: 'solid',
        outline : 'none',
        width : 400
    }
}
export default SharePage
