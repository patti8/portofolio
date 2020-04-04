import React, { Component } from 'react';
import { SocialMediaIconsReact } from 'social-media-icons-react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


class Social extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col><SocialMediaIconsReact className="tes" borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="double" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(141,141,141,1)" iconSize="5" roundness="50%" url="https://www.linkedin.com/in/tendy-rivaldo-a7bb01173/" size="40" /></Col>
                    <Col><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="double" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(141,141,141,1)" iconSize="5" roundness="50%" url="https://github.com/patti8" size="40" /></Col>
                    <Col><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="double" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(141,141,141,1)" iconSize="5" roundness="50%" url="https://www.instagram.com/tendyrivaldo/" size="40" /></Col>
                </Row>
            </Container>
           
        )
    }
}

export default Social