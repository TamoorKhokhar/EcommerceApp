import Shoppingdropdown from "./components/Shoppingdropdown";
import Price from "./components/PriceFilter";
import FetchApi from "./components/FetchApi";
import "./App.css";
import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      listUpdated: [],
      GetPriceData: "",
    };
    this.filterItem = this.filterItem.bind(this);
    this.SearchFilter = this.SearchFilter.bind(this);
    this.GetPriceData = this.GetPriceData.bind(this);
  }

  async componentDidMount() {
    const res = await axios.get("https://fakestoreapi.com/products");
    const result = res.data;
    console.log(res.data);
    this.setState({ list: result, listUpdated: result });

    // fetch("https://fakestoreapi.com/products").then((response) => {
    //   response.json().then((result) => {
    //     this.setState({ list: result });
    //   });
    // });
  }
  SearchFilter(e) {
    const item = e.target.value;
    console.log(e.target.value);

    const updatedItems = this.state.list.filter((currentElement) => {
      return currentElement.title.toLowerCase().includes(item.toLowerCase());
    });
    this.setState({ listUpdated: updatedItems });
    console.log(updatedItems);
  }

  filterItem(Item) {
    const updatedItems = this.state.list.filter((currentElement) => {
      return currentElement.category === Item;
    });
    this.setState({ listUpdated: updatedItems });
    console.log(updatedItems);
  }
  GetPriceData(event) {
    event.preventDefault();
    const min = event.target.minimumprice.value;
    const max = event.target.maximumprice.value;
    console.log(min, max);
    const updatedItems = this.state.list.filter((currentElement) => {
      return currentElement.price >= min && currentElement.price <= max;
    });
    this.setState({ listUpdated: updatedItems });
    console.log(updatedItems);
  }

  render() {
    return (
      <div className="App">
        <header>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossOrigin="anonymous"
          />
        </header>

        <h1 className="Shppingkaroheading">SHOPPING KARO </h1>
        <div className="inputField">
          <h5 className="h5">Search Products Here :</h5>
          <input
            className="input"
            type="search"
            placeholder="SearchItem"
            onChange={this.SearchFilter}
          ></input>
        </div>

        <Shoppingdropdown
          productData={this.state.list}
          filterItem={this.filterItem}
        />
        <Price formsubmit={this.GetPriceData} />
        <FetchApi productData={this.state.listUpdated} />
      </div>
    );
  }
}

export default App;
