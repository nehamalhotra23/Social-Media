import React from "react";
import Profile from "./Profile";


var newProfileList = [
    { 
    images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdpUIHUmJwkJ_SVbepBEMHoxrsmjMH_JTH69NQHUjgFC4zTWH&s',
     names: 'New baby',
   }
   ];

   function ProfileList(){
    return (
        <div>
          <hr/>
          {newProfileList.map((profile, index) =>
            <Profile images={profile.images}
            names={profile.names}
              key={index}/>
          )}
        </div>
      );
  }
  export default ProfileList;
