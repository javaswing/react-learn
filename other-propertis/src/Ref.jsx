import React, { useEffect, useRef } from 'react'

// 使用fowardRef可以让自己的ref传递给父级，做为props之外的参数
const FancyButton = React.forwardRef((props, ref) =>
  <input ref={ref}></input>
)

export default function Ref() {
  const ref = useRef()

  useEffect(() => {
    console.log(ref)
    ref.current && ref.current.focus(); // 自动获取焦点
  }, [ref])

  return (< FancyButton ref={ref} ></FancyButton >)
}