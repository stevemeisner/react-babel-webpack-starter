import React from "react";
import ReactDOM from "react-dom";
import Question from "./components/Question";
import Answer from "./components/Answer";
import css from "./styles/index.scss";

const App = () => {
  return (
    <>
      <Question text="WHAT IS UP!" />
      <Answer text="This is my answer." />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
