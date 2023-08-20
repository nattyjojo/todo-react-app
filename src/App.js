import { useRef, useState } from "react";
import Checkbox from "./components/checkbox";
import Head from "./components/head";
import Input from "./components/input";
import SubmitButton from "./components/submitButton";

function App() {
  let [inputedValue, setInputedValue] = useState([]);
  const inputRef = useRef(null);

  const clickHandler = (event) => {
    const inputValue = inputRef.current.value;
    setInputedValue((priviousValue) => [...priviousValue, inputValue]);
  };

  return (
    <>
      <header>
        <Head title={"TODO APP"} />
      </header>
      <section>
        <Input todoInput={inputRef} />
        <SubmitButton btnName={"Add Todo"} onClick={clickHandler} />
      </section>
      <section>
        <Head title={"Todo's"} />
        {inputedValue.length > 0 ? (
          <SubmitButton
            btnName={"Delete"}
            onClick={() => setInputedValue([])}
          />
        ) : null}
        {inputedValue.map((value, index) => (
          <section key={index}>
            <Checkbox />
            <i>{value}</i>
          </section>
        ))}
      </section>
    </>
  );
}

export default App;
