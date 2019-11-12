import React from "react";
import NewsfeedList from "./NewsfeedList";
import ProfileList from "./ProfileList";
import Navbar from "./Navbar";   
import Bio from "./Bio";                  


function App(){
    return (
      
          <div>
            <Navbar/>
          <div className="row">
          <div className="col-md-4"><ProfileList/>
          <Bio/>
          </div>
          <div className="col-md-6"><NewsfeedList/></div>
         
        </div>
        </div>
       
      );
  }
  
  export default App;