import * as React from "react";

export type ChildrenComponentProps = {
  className?: string;
  label?: string;
};

const ChildrenComponent = React.forwardRef<
  HTMLInputElement,
  ChildrenComponentProps
>((props: ChildrenComponentProps, ref) => {
  const { className, label } = props;

  return (
    <label>
      {label} <input ref={ref} className={className}></input>
    </label>
  );
});

const FormField = React.forwardRef<HTMLInputElement, { label: string }>(
  (props, ref) => {
    return <ChildrenComponent ref={ref} label={props.label} />;
  }
);

const FowardRefMultipleComponent = () => {
  const ref = React.useRef<HTMLInputElement>(null);

  return (
    <div className="card">
      <h4>forwardRef in multiple components </h4>
      <button
        className="btn"
        onClick={() => {
          ref.current?.focus();
        }}
      >
        Editor
      </button>

      <FormField ref={ref} label="姓名:" />
    </div>
  );
};

export default FowardRefMultipleComponent;
