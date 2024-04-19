import React, { Component } from "react";
import BannerComponent from "./BannerComponent";
import CardItemComponent from "./CardItemComponent";

export default class BodyComponent extends Component {
  render() {
    return (
      <div className="container mb-5">
        <BannerComponent />
        <CardItemComponent />
      </div>
    );
  }
}
