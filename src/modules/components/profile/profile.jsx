import React from 'react';
import girl from '../../../asserts/girl.png'
import './profile.css';
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import Waving from '../../../asserts/waving.png'


const Profile = () => {
  return (
    <div className='container'>
        <div className="main-hero">
            <div className="intro"> 
                <img src={Waving} alt="waving_hand"  width={32} height={32} />
                <p>
                    Hi, I'm Sravani. A passionate Front-end
                    Developer based in Hyderabad, India. 📍
                </p>
                <span>
                    <a 
                    target='_blank'
                    rel="noreferrer"
                    href='https://www.linkedin.com/in/sravani-linguberi-ab04b5156/'
                    /><FaLinkedin width={32} height={32} />
                </span>
                <span>
                    <a 
                    target='_blank'
                    rel="noreferrer"
                    href='https://github.com/Sravani-Linguberi'
                    /><BsGithub width={32} height={32} />
                </span>
            </div>
            <div className="pic">
                <img className='girl' src={girl} alt='girl_img'/>
            </div>

        </div>

    </div>
  )
}

// const skillsIcons = [
//     // {
//     //   img: "https://skillicons.dev/icons?i=html,css",
//     //   id: 1,
//     // },
//     // {
//     //   img: "https://skillicons.dev/icons?i=js,ts",
//     //   id: 2,
//     // },
//     // {
//     //   img: "https://skillicons.dev/icons?i=react,next",
//     //   id: 3,
//     // },
//     // {
//     //   img: "https://skillicons.dev/icons?i=tailwind,scss",
//     //   id: 4,
//     // },
//   ];
  
//   function hero() {
//     return (
//       <>
//         <section id="home" className="hero">
//           <div className="container">
//             <div className="content">
//               <div className="hero-main">
//                 <div className="hero-text">
//                   <h1>Front-End React Developer</h1>
//                   <img src={Waving} alt="waving_hand" />
                 
//                   <span>
//                     <a
//                       aria-label="linkedin"
//                       rel="noreferrer"
//                       target="_blank"
//                       href="https://www.linkedin.com/in/stefan-topalovic-dev/"
//                     >
//                       <IconBrandLinkedin width={32} height={32} />
//                     </a>
//                     <a
//                       aria-label="github"
//                       rel="noreferrer"
//                       target="_blank"
//                       href="https://github.com/stefvndev"
//                     >
//                       <IconBrandGithub width={32} height={32} />
//                     </a>
//                   </span>
//                 </div>
  
//                 <div className="hero-img"></div>
//               </div>
  
//               {/*  */}
//               <div className="skills">
//                 <p>Tech Stack</p>
//                 <div className="logos">
//                   <ul>
//                     {skillsIcons.map((icon) => (
//                       <li key={icon.id}>
//                         <img src={icon.img} alt="skill-icon" />
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </>
//     );
//   }
export default Profile;