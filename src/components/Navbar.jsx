import React from "react";

function Navbar() {
    return (
        <div>
            <style jsx>{`
          div {
             
        }
      .search {
        float: right;
        margin-right : 20px;
        }

        .main{
            padding: 20px;
        }
        .btn btn-danger {
            margin: auto;
        }
        `}</style>
            <div className="main">
            <button className="btn btn-danger">Home</button>
            <button className="btn btn-danger">Profile</button>
            <button className="btn btn-danger">Messages</button>
            </div>
         <div className="search">
                <input placeholder="search"></input>
                <input className="tweet" placeholder="Tweet"></input>
            </div>
        </div>
    );
}
export default Navbar;