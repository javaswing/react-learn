import React, { useRef, useEffect, forwardRef } from 'react';
import withHeader from './withHeader';

// 如果使用HOC组件需要使用到ref，那么需要把函数组件换成类组件才可以
// 否则会提示：Function components cannot be given refs.
class Demo extends React.Component {
  render () {
    const {geRef, ...props} = this.props
    return <div ref={geRef} {...props}>我是一个普通的组件</div>
  }
}

const WidthHeaderDemo = withHeader(Demo, '自定义标题')

// 获取不到ref: Function components cannot be given refs.
// function Demo(props, ref) {
//   return <div ref={ref} {...props}>我是一个普通的组件</div>
// }

// 这样写获取的是Demo中的ref
// const FunctionDemo = forwardRef(Demo)
// const WidthHeaderDemo = withHeader(FunctionDemo, '自定义标题')

export default function Hoc(params) {
  const ref = useRef(null)
  useEffect(() => {
    console.log(ref)
  }, [ref])

  return <WidthHeaderDemo ref={ref} />
};



