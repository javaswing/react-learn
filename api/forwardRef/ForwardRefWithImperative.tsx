import * as React from "react";

export type ChildrenComponentProps = {
  className?: string;
};

export type ChildrenComponentHandle = {
  focus: () => void;
  setName: () => void;
};

const ChildrenComponent = React.forwardRef<
  ChildrenComponentHandle,
  ChildrenComponentProps
>((props: ChildrenComponentProps, ref) => {
  const { className } = props;
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current?.focus();
      },
      setName() {
        inputRef.current.value = "javaswing";
      },
    };
  });

  return <input ref={inputRef} className={className}></input>;
});

const ForwardRefWithImperative = () => {
  const ref = React.useRef<ChildrenComponentHandle>(null);

  return (
    <div className="card">
      <h4>ForwardRefWithImperative</h4>
      <button
        className="btn"
        onClick={() => {
          ref.current?.focus();
        }}
      >
        获取焦点
      </button>

      <button
        className="btn"
        onClick={() => {
          ref.current?.setName();
        }}
      >
        设置默认值
      </button>

      <ChildrenComponent ref={ref} />
    </div>
  );
};

export default ForwardRefWithImperative;
