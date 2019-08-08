import React from 'react';
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

function name(a: any) {
  // 你可以直接获取 DOM button 的 ref：
  const refa = React.createRef();
  console.log(refa);

  return <FancyButton ref={refa}>Click me!</FancyButton>;
}
export default name;
