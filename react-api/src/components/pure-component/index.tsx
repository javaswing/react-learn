import React from "react";

type PureComponentsProps = {};

type PureComponentsState = {
  data: {
    name: string;
    age: number;
  };
};

class PureComponents extends React.PureComponent<
  PureComponentsProps,
  PureComponentsState
> {
  constructor(props: PureComponentsProps | Readonly<PureComponentsProps>) {
    super(props);
    this.state = {
      data: {
        name: "javaswing",
        age: 29,
      },
    };
  }

  handerClick = () => {
    const { data } = this.state;
    data.age++;
    this.setState({ data: { ...data } });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="box">
        <div className="show">
          <div> 你的姓名是: {data.name} </div>
          <div> 年龄： {data.age}</div>
          <button onClick={this.handerClick}>age++</button>
        </div>
      </div>
    );
  }
}

export default PureComponents;
