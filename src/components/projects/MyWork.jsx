import React from "react";
import "./MyWork.css";

import myProjects from "../../assets/myworkdata";
function MyWork() {
  return (
    <div id="projects" className="mywork">
      <div className="work-title">
        {" "}
        <h1>Completed Projects</h1>{" "}
      </div>
      <div className="work-container">
        {myProjects.map((item, index) => 
        <div className="program" >
            <img className="workImg "
             key={index}
              src={item.w_img} 
              alt="" />
               <div className='caption'>
    <img src={item.logo} alt='' />
    <p > {item.service} </p>

    </div>
              
               </div>
          )}
      </div>
    </div>
  );
}

export default MyWork;
