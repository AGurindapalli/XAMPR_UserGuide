import React from "react";
var installImg =
  "https://uploads.codesandbox.io/uploads/user/89aa82f7-8c14-453b-85d8-041349d4a1ce/Ycqp-Install_Xampr.jpg";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <img src={installImg} alt={"Hello World"} />
      </div>
    );
  }
}
