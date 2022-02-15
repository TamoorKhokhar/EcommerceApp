import React from "react";

class Shoppingdropdown extends React.Component {
  render() {
    return (
      <div className="mainshoppingdiv">
        <div className="Shoppingdropdown">
          <button
            className="shoppingdropdownbtn"
            onClick={() => this.props.filterItem("men's clothing")}
          >
            Mens
          </button>
          <button
            className="shoppingdropdownbtn"
            onClick={() => this.props.filterItem("women's clothing")}
          >
            Women's
          </button>
          <button
            className="shoppingdropdownbtn"
            onClick={() => this.props.filterItem("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="shoppingdropdownbtn"
            onClick={() => this.props.filterItem("electronics")}
          >
            Electronics
          </button>
        </div>
      </div>
    );
  }
}
export default Shoppingdropdown;
// export default function Shoppingdropdown() {
// const filterItem = (MensItem) => {
//   const updatedItems = this.state.list.filter((currentElement) => {
//     return currentElement.Shoppingdropdown === MensItem;
//   });
// };

// return (
//   <div className="Shoppingdropdown">
//     <button onClick={() => filterItem("men's clothing")}>
//       Mens Category
//     </button>
//     <button>Women's Category</button>
//     <button>Jewelery</button>
//     <button>Electronics</button>
//   </div>
// );
// }
