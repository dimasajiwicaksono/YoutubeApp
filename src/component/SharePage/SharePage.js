import React , {Component} from 'react';
import Dexie from "dexie";
import { Form, Button } from 'react-bootstrap';

import Header from '../NavBar/Header'


//set the database 
const db = new Dexie("ReactDexie");

    //create the database store
    db.version(1).stores({
        data: "++id, user, url"
    })
    db.open().catch((err) => {
        console.log(err.stack || err)
    })

class SharePage extends Component {

    constructor (props) {
        super (props);

        this.onChangeUrl = this.onChangeUrl.bind(this);
        this.state = {
            user : '',
            url : '',
            data : "",
        }
    
    }
    
    //handle event

   

    onChangeUrl(e) {
        this.setState ({
            url : e.target.value
        })
    }

    handleClick= (e)=> {
        const user = localStorage.getItem("email");
        const {url} = this.state
        this.setState ({
            url : e.target.value
        })

        db.data.add({url:url, user: user}).then (() => {
            let getData = db.data.toArray();
            return getData;
        })
    }

    onSubmit(e) {
        e.preventDefault();
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className='container' style={styles.body}>
                        <Form onSubmit = {this.onSubmit}style={styles.form}>
                        <label><strong>Youtube Url</strong></label>
                            <div className='form-group url'>
                                <input tyle='submit' style={styles.input}
                                    value ={this.state.url}
                                    onChange={this.onChangeUrl}
                                    />
                            </div>
                            <Button variant = 'outline-danger' onClick ={this.handleClick} style={styles.button}>Share Video</Button>
                        </Form>
                </div>
            </React.Fragment>
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
    },
    btn : {
        backgroundColor : 'blue'
    }
}
export default SharePage
