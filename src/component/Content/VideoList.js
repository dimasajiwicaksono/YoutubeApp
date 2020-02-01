import React, { Component } from 'react';
import {Row, Col, Card} from 'react-bootstrap';

export class VideoList extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col md={6} xs={12} style={styles.video}> 
                        <iframe style={styles.videoList}
                            src={this.props.url}>
                        </iframe>
                    </Col>
                    <Col md={6} xs={12} style={styles.description}>
                        <Card style={styles.card}>
                            <p>{this.props.title}</p>
                            <p>Shared by: </p>
                            <p>description</p>
                            <p>{this.props.description}</p> 
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}


const styles = {
    video : {
        textAlign:'center'
    },
    videoList : {
        marginTop : 10,
        padding: 10,
        border:'none',
        width: 400,
        height: 200
    },
    description : {
        
    },
    card : {
        margin: 20,
        border:'none'
    }
}

export default VideoList
