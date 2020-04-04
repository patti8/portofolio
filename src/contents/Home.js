import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../images/profile.jpg';
import Image from 'react-bootstrap/Image';

class Home extends Component {
    render() {
        return (
            <div className="condiv home" id="page-wrap">
               <Image src={profilepic} className="profilepic" roundedCircle />
                <h1><b>Tendy Rivaldo</b></h1>
                <ReactTypingEffect className="typingEffect" text={['I am a Web Developer', 'I am a Ruby on Rails Developer']} speed={100} eraseDelay={700}/>
            
            </div>
        )
    }
}
export default Home