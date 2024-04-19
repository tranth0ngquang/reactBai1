import React, { Component } from "react";
import CardComponent from "./CardComponent";

export default class CardItemComponent extends Component {
  render() {
    return (
      <div className="myCard_Component container-fluid">
        <div className="row justify-content-around">
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </div>
    );
  }
}
