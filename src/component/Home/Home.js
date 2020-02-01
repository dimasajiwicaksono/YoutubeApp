import React, { Component } from 'react';
import Header from '../NavBar/Header';

import VideoList from '../Content/VideoList'

export class Home extends Component {
    constructor (){
        super ();
        this.state = {
            DATA : [
                {id:1, title:'first title', url :'https://www.youtube.com/embed/tgbNymZ7vqY', description: 'Lorem ipsum dolot amet dolor'},
                {id:2, title:'second title', url :'https://www.youtube.com/embed/orL-w2QBiN8', description: 'Lorem ipsum dolot amet dolor'},
                {id:3, title:'third title', url :'https://www.youtube.com/embed/d1yfX6VnrSU',description: 'Lorem ipsum dolot amet dolor'},
                {id:4, title:'fourth title', url :'https://www.youtube.com/embed/tgbNymZ7vqY',description: 'Lorem ipsum dolot amet dolor'}
            ]
        }
    }
    
    render() {
        return (
            <div className='content'>
                <Header />
                <div className='container'>
                    {this.state.DATA.map((item, index) => 
                        <VideoList 
                            title={item.title}
                            description={item.description}
                            url={item.url}
                        />
                    )}
                    
                </div>
            </div>
        )
    }
}


export default Home
