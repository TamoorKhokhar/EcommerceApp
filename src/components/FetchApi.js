import React, { Component } from "react";
export default class fetchApi extends Component {
  render() {
    return (
      <>
        <h1 className="listofproduct">List of Product</h1>
        <div className="FetchListOfProduct">
          {this.props.productData ? (
            <div className="display-flex">
              {this.props.productData.map((item, i) => (
                <div className="fetchapi">
                  <img className="fetchapiimages" src={item.image} alt="..." />
                  <p className="itemtitle">Title: {item.title}</p>
                  <p className="itemcategory"> Category:{item.category}</p>
                  <h5 className="itemprice">Price:{item.price}</h5>
                  <h5 className="itemrating">Rating:{item.rating.rate}</h5>
                </div>
              ))}
            </div>
          ) : (
            <p>Please Wait loading...</p>
          )}
        </div>
      </>
    );
  }
}
