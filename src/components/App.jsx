import React from "react";
import NewsfeedList from "./NewsfeedList";
import ProfileList from "./ProfileList";
import Header from "./Header";


function App(){
    return (
        <div>
          <Header/>
          <NewsfeedList/>
          <ProfileList/>
        </div>
      );
  }
  
  export default App;