import React from "react";

function Navbar() {
    return (
        <div>
            <style jsx>{`
          div {
            
        }
      .search {
        float: right;
        margin: 20px;
        }

        .btn {
            margin-right: 10px;
        }
        .feed {
            margin-top: 30px;
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
            <div className="feed">
                <input placeholder="What's happening"></input>
            </div>
        </div>
    );
}
export default Navbar;