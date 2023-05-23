import * as React from "react";

export type ChildrenComponentProps = {
  className?: string;
};

const ChildrenComponent = React.forwardRef<
  HTMLInputElement,
  ChildrenComponentProps
>((props: ChildrenComponentProps, ref) => {
  const { className } = props;

  return <input ref={ref} className={className}></input>;
});

const ForwardRefWithDOM = () => {
  const ref = React.useRef<HTMLInputElement>(null);

  return (
    <div className="card">
      <h4>forwardRef expose DOM</h4>
      <button
        className="btn"
        onClick={() => {
          ref.current?.focus();
        }}
      >
        获取焦点
      </button>

      <ChildrenComponent ref={ref} />
    </div>
  );
};

export default ForwardRefWithDOM;
