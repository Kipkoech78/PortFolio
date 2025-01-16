import React from 'react'
import './MyWork.css'
import myProjects from '../../assets/myworkdata'
function MyWork() {
  return (
    <div className='mywork'>
    <div className='work-title' > <h1>Completed Projects</h1> </div>
    <div className='work-container' >
        {
            myProjects.map((item, index)=>{
                return <img className='workImg' key={index} src={item.w_img} alt='' />
            })

        }
    </div>

    </div>
  )
}

export default MyWork