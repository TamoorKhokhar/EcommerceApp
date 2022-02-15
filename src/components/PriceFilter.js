import React from "react";
export default class Price extends React.Component {
  render() {
    return (
      <>
        <div className="formalignment">
          <div class="divForm">
            <form onSubmit={this.props.formsubmit}>
              <input
                className="minimumpriceinput"
                type="number"
                name="minimumprice"
                placeholder="Minimum Price"
              />

              <input
                className="minimumpriceinput"
                type="number"
                name="maximumprice"
                placeholder="Maximum Price"
              />

              <button className="submitbtn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
