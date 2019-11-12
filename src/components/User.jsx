import React from "react";
import PropTypes from "prop-types";


function User(props){
 
    return (
      <div>
           <style jsx>{`
          div {
            background-color: light blue;
        }
        img {
          border: solid red;
        }
        .feed {
          margin-bottom: 20px;
        }
        `}</style>
         
         <img src={props.images} height="100px"/>
        <h1>{props.names}</h1>
        <button className="btn btn-primary">Add friend</button>
        <hr/>
     
       
      </div>
    );
  }
  
User.propTypes = {
    images: PropTypes.string,
    names: PropTypes.string,
  
  
};
export default User;