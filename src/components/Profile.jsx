import React from "react";
import PropTypes from "prop-types";


function Profile(props){
    return (
<Container>
  <Row>
    <Col>1 of 2</Col>
      <div>
           <style jsx>{`
          div {
            background-color: white;
            text-align: left;
            border: solid;
          }
        `}</style>
         <img src={props.images} height="200px"/>
        <h1>{props.names}</h1>
      </div>
      </Row>
      </Container>
    );
  }
  
Profile.propTypes = {
    images: PropTypes.string,
    names: PropTypes.string,

  
};
export default Profile;