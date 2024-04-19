import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import BodyComponent from "./BodyComponent";
import FooterComponent from "./FooterComponent";

export default class HomeComponent extends Component {
  render() {
    return (
      <div className="container-fluid">
        <HeaderComponent />
        <BodyComponent />
        <FooterComponent />
      </div>
    );
  }
}
