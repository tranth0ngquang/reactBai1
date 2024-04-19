import React, { Component } from "react";

export default class BannerComponent extends Component {
  render() {
    return (
      <div className="banner container-fluid pt-5 pb-5">
        <div className="innerBanner">
          <h1>A Warm Welcome !</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            illo neque nemo saepe. Maiores est veniam beatae minima! Deleniti
            nulla pariatur, quo quam fugiat rem dignissimos dolorum doloremque
            obcaecati ipsum, accusantium assumenda id debitis fuga explicabo
            possimus ut modi! Dolorum repellendus blanditiis est inventore sed,
            molestiae eum officia odio harum.
          </p>
          <button className="btn btn-info">Call to action</button>
        </div>
      </div>
    );
  }
}
