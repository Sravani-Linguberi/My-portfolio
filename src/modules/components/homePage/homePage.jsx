import React, { useState } from 'react';
// import wat from '../../../asserts/wat.mp4';
// import gif from '../../../asserts/gif.gif';
import NavBar from '../nav/nav';
import Profile from '../profile/profile';
function HomePage() {
  const [ theme , setTheme] = useState('light')

  return (
    <div>
      <NavBar theme={theme} setTheme={setTheme} />
      <Profile/>
    </div>
  )
}

export default HomePage