import React from "react";

interface PureComponentDemoProps {}

interface PureComponentDemoState {
  data: {
    age: number;
    name: string;
  };
}

class PureComponentDemo extends React.PureComponent<
  PureComponentDemoProps,
  PureComponentDemoState
> {
  state: PureComponentDemoState = {
    data: {
      age: 29,
      name: "javaswing",
    },
  };

  handlerClick = () => {
    const { data } = this.state;
    data.age++;
    this.setState({ data });
  };

  render() {
    const { data } = this.state;
    console.log("render");
    return (
      <div>
        <div className="show">
          <div> 你的姓名是: {data.name} </div>
          <div> 年龄： {data.age}</div>
          <button onClick={this.handlerClick}>age++</button>
        </div>
      </div>
    );
  }
}

export default PureComponentDemo;
