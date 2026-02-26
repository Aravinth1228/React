import React from 'react'

function sidebar() {
  return (
    <div className='m-3'>
        <div className='d-flex flex-column gap-3'>
          <img className ='text-logo'src=".\src\assets\download.png" alt="" />
          <div><i class="bi bi-house-door-fill"></i>Home</div>
          <div><i class="bi bi-search"></i>Search</div>
          <div><i class="bi bi-compass"></i>Explore</div>
          <div><i class="bi bi-play-btn"></i>Reels</div>
          <div><i class="bi bi-chat-heart-fill"></i>Messages</div>
          <div><i class="bi bi-bell-fill"></i>Notification</div>
          <div><i class="bi bi-plus-square"></i>Create</div>
          <div><i class="bi bi-person-circle"></i>Profile</div>
        </div>

        <div className=' position-fixed bottom-0 d-flex flex-column gap-3 mb-5'>
          <div><i class="bi bi-threads"></i>Threads</div>
          <div><i class="bi bi-list"></i>More</div>
        </div>
    </div>
  )
}

export default sidebar
