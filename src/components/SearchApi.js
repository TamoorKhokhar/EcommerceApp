// import React, { Component } from "react";
// export default class SearchApi extends Component {
//   constructor() {
//     super();
//     this.state = {
//       SearchData: null,
//       noData: false,
//     };
//   }
//   search(key) {
//     console.log(key);
//     fetch("https://fakestoreapi.com/products?q=" + key).then((data) => {
//       data.json().then((resp) => {
//         console.log("resp", resp);
//         if (resp.length > 0) {
//           this.setState({ SearchData: resp });
//         } else {
//           this.setState({ noData: true, SearchData: null });
//         }
//       });
//     });
//   }

//   render() {
//     return (
//       <div className="navbar">
//         <input
//           className="inputfieldsearch"
//           type="search"
//           placeholder="Search"
//           onChange={(e) => this.search(e.target.value)}
//         />

//         <div>
//           {this.state.SearchData ? (
//             <div>
//               {this.state.SearchData.map((item, i) => (
//                 <div>
//                   <img className="fetchapiimages" src={item.image} alt="..." />
//                   <div> {item.title}</div>
//                   <div className="itemcategory">{item.category}</div>
//                   <div className="itemprice">{item.price}</div>
//                   <div className="itemrating">{item.rating.rate}</div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             ""
//           )}

//           {this.state.noData ? <h3>No Data Found</h3> : null}
//         </div>
//       </div>
//     );
//   }
// }
