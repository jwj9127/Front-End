// import React, { useState } from "react";
// import "./Munurg.css";

// function Munurg() {
//   const [munurg, setMunurg] = useState(false);

//   const toggleMunurg = () => {
//     setMunurg(!munurg);
//   };

//   if (munurg) {
//     document.body.classList.add("active-Munurg");
//   } else {
//     document.body.classList.remove("active-munurg");
//   }

//   const [munurg1, setMunurg1] = useState(false);

//   const toggleMunurg1 = () => {
//     setMunurg1(!munurg);
//   };

//   if (munurg) {
//     document.body.classList.add("active-Munurg");
//   } else {
//     document.body.classList.remove("active-munurg");
//   }

//   return (
//     <>
//       <div className="munu">
//         <div className="right">
//           <button onClick={toggleMunurg} className="btn-munu1">
//             캐릭
//           </button>
//           {munurg && (
//             <div className="munurg">
//               <div onClick={toggleMunurg} className="overlay"></div>
//               <div className="munurg-munu1-content">
//                 <h3 className="titile">캐릭터 선택창</h3>
//                 <div className="box"></div>
//                 <button className="close-btn" onClick={toggleMunurg}>
//                   X
//                 </button>
//               </div>
//             </div>
//           )}
//           <button onClick={toggleMunurg1} className="btn_munu2">
//             배경
//           </button>
//           {munurg && (
//             <div className="munu_rg_2">
//               <div onClick={toggleMunurg1} className="overlay2"></div>
//               <div className="munu_rg_munu2_content">
//                 <h3 className="titile2">배경 선택창</h3>
//                 <div className="box2"></div>
//                 <button className="close-btn2" onClick={toggleMunurg1}>
//                   X
//                 </button>
//               </div>
//             </div>
//           )}
//           <button className="munu3">test</button>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Munurg;
