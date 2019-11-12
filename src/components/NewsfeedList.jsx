import React from "react";
import Newsfeed from "./Newsfeed";


var masterNewsfeedList = [
    {
      images: 'http://images.agoramedia.com/wte3.0/gcms/babys-first-words-722x406.jpg?width=414',
      names: 'Thato',
      bio: 'test bio',
     
    },
    {
      images: 'https://www.sehdph.org/wp-content/uploads/2018/07/Blue-Eyed-Baby.jpg',
      names: 'Sleater',
      bio: 'test bio',
      
    },
    {
      images: 'https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555323228/shape/mentalfloss/baby_0.jpg',
      names: 'Imani',
      bio: 'test bio',
    
    }
  ];

function NewsfeedList(){
    return (
        <div>
          {masterNewsfeedList.map((newsfeed, index) =>
            <Newsfeed images={newsfeed.images}
            names={newsfeed.names}
              bio={newsfeed.bio}
              key={index}/>
          )}
        </div>
      );
  }
  
  export default NewsfeedList;
 