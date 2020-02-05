import React, { Component } from 'react';
import {Row, Col, Card} from 'react-bootstrap';


export class VideoList extends Component {

    render() {
        const {id, title, description} = this.props;
        return (
                <Row>
                    <Col md={6} xs={12} style={styles.video}> 
                        <iframe style={styles.videoList}
                            src={`https://youtube.com/embed/${id}`}>
                        </iframe>
                    </Col>
                    <Col md={6} xs={12} style={styles.description}>
                        <Card style={styles.card}>
                            <h4>{title}</h4>
                            <p>Shared by: </p>
                            <p>description</p>
                            <p>{description}</p> 
                        </Card>
                    </Col>
                </Row> 
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
        width:  600,
        height: 400
    },
    card : {
        margin: 20,
        border:'none'
    }
}

export default VideoList;
