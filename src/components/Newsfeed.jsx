import React from "react";
import PropTypes from "prop-types";


function NewsFeed(props){
    return (
      <div>
           <style jsx>{`
          div {
            background-color: light blue;
        
          }
        `}</style>
         <img src={props.images} height="100px"/>
        <h1>{props.names}</h1>
        <p><em>{props.bio}</em></p>
      </div>
    );
  }
  
NewsFeed.propTypes = {
    images: PropTypes.string,
    names: PropTypes.string,
    bio: PropTypes.string,
  
};
export default NewsFeed;