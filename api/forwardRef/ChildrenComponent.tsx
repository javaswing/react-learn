import * as React from "react";

export type ChildrenComponentProps = {
  className?: string;
};

const ChildrenComponent = React.forwardRef<
  HTMLDivElement,
  ChildrenComponentProps
>((props: ChildrenComponentProps, ref) => {
  const { className } = props;

  return (
    <div ref={ref} className={className}>
      ChildrenComponent
    </div>
  );
});

export default ChildrenComponent;
