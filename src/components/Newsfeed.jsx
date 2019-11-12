import React from "react";
import PropTypes from "prop-types";


function NewsFeed(props){
 
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
        <p><em>{props.bio}</em></p>
        <hr/>
       
      </div>
    );
  }
  
NewsFeed.propTypes = {
    images: PropTypes.string,
    names: PropTypes.string,
    bio: PropTypes.string,
  
};
export default NewsFeed;

{/* <div className="feed">   
<input placeholder="search"></input>
</div> */}