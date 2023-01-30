import React from 'react'

import FeedContainer from '../feed-container/FeedContainer'
import SideBar from '../side-bar/SideBar'

const MainContainer = () => {
  return (
    <div className='w-full h-full flex py-1 pb-10  '>
        <SideBar/>
       <FeedContainer/>
    </div>
  )
}

export default MainContainer