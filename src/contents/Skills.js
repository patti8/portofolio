import React, { Component } from 'react';
import ProgressBar from 'react-animated-progress-bar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class Skills extends Component {
    render(){
        return (
            <div className="condiv">
                <h1><b>Skills</b></h1>

               <Container>
                 <tr>
                     <td>Bootstrap &nbsp;</td>
                     <td>
                     <ProgressBar 
                            width="400px"
                            height="10px"
                            rect
                            fontColor="black"
                            percentage="85"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            trackBorderColor="grey" 
                            />
                     </td>
                 </tr>
                 
                 <tr>
                     <td>HTML & CSS &nbsp;</td>
                     <td>
                     <ProgressBar 
                            width="400px"
                            height="10px"
                            rect
                            fontColor="black"
                            percentage="70"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            trackBorderColor="grey" 
                            />
                     </td>
                 </tr>

                 <tr>
                     <td>Git &nbsp;</td>
                     <td>
                     <ProgressBar 
                            width="400px"
                            height="10px"
                            rect
                            fontColor="black"
                            percentage="65"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            trackBorderColor="grey" 
                            />
                     </td>
                 </tr>

                 <tr>
                     <td>Jquery &nbsp;</td>
                     <td>
                     <ProgressBar 
                            width="400px"
                            height="10px"
                            rect
                            fontColor="black"
                            percentage="65"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            trackBorderColor="grey" 
                            />
                     </td>
                 </tr>

                 <tr>
                     <td>Ruby on Rails &nbsp;</td>
                     <td>
                     <ProgressBar 
                            width="400px"
                            height="10px"
                            rect
                            fontColor="black"
                            percentage="80"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            trackBorderColor="grey" 
                            />
                     </td>
                 </tr>

                 <tr>
                     <td>Javacript &nbsp;</td>
                     <td>
                     <ProgressBar 
                            width="400px"
                            height="10px"
                            rect
                            fontColor="black"
                            percentage="65"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            trackBorderColor="grey" 
                            />
                     </td>
                 </tr>

                 <tr>
                     <td>React &nbsp;</td>
                     <td>
                     <ProgressBar 
                            width="400px"
                            height="10px"
                            rect
                            fontColor="black"
                            percentage="40"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            trackBorderColor="grey" 
                            />
                     </td>
                 </tr>

        
               </Container>
               
            </div>
        )
    }
}

export default Skills