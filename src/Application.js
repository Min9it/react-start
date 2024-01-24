import { useState, useEffect } from "react";

function Application() {
  const [showing, setShowing] = useState(false);

  const Hello = () => {
    useEffect(effectFunc, []);

    return <h1>Hello</h1>;
  };

  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}> {showing ? "Hide" : "Show"} </button>
    </div>
  );

  // destroyed 시점에 실행
  function destroyFunc() {
    return console.log("destroyed! :(");
  }

  // init 시점에 실행(2nd parameter가 없기 때문에 최초 1회만)
  function effectFunc() {
    console.log("created! :)");
    return destroyFunc;
  }
}

export default Application;
