import React from "react";
import NewsfeedList from "./NewsfeedList";
import ProfileList from "./ProfileList";
import Navbar from "./Navbar";   
import Bio from "./Bio";  
import UserList from "./UserList";                                  


function App(){
    return (
      
          <div>
              <style jsx>{`
          div {
           margin-top: 40px;
           
        }
        .col-md-4, .col-md-6, .col-md-2 {
          border: solid #aeaeae;
        }
       
        `}</style>
         
            <Navbar/>
          <div className="row">
          <div className="col-md-4"><ProfileList/>
          <Bio/>
          </div>
          <div className="col-md-6"><NewsfeedList/></div>
          <div className="col-md-2"><UserList/></div>
        </div>
        </div>
       
      );
  }
  
  export default App;