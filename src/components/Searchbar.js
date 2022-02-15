// // import "./App.css";
// import React, { useState } from "react";
// export default function SearchBar() {
//   const [data, setData] = useState(null);
//   const [print, setprint] = useState(false);

//   const Fetchdata = (e) => {
//     // console.log(e.target.value);
//     e.preventDefault();
//     setData(e.target.value);
//   };

//   function Onclick(e) {
//     e.preventDefault();
//     setprint(true);
//   }

//   return (
//     <div>
//       <div className="navbar">
//         <form>
//           <input
//             className="inputfieldsearch"
//             type="search"
//             placeholder="Search"
//             onChange={Fetchdata}
//           />
//           <button className="searchbtn" onClick={Onclick}>
//             Search
//           </button>
//         </form>
//       </div>
//       {print ? <h1>{data}</h1> : null}
//     </div>
//   );
// }
