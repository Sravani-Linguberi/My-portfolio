import React, { useState } from "react";
import NavBar from "../navBar/navBar";
import Profile from "../profile/profile";
function HomePage() {
  const [theme, setTheme] = useState("light");
  document.querySelector("body").setAttribute("data-theme", theme);
  return (
    <div>
      {/* <NavBar theme={theme} setTheme={setTheme} /> */}
      <NavBar />
      {/* <Profile /> */}
    </div>
  );
}

export default HomePage;
