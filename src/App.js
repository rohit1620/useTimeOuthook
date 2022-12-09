import "./styles.css";
import useTimeOut from "./Components/useTimeout";
import { useState } from "react";
import useDebounce from "./Components/useDebounce";

export default function App() {
  const [count, setCount] = useState(0);

  const { clearTimeout, resetTimeout } = useTimeOut(() => {
    console.log("Hi this is My timeOut");
  }, 5000);

  useDebounce(
    () => {
      alert(count);
    },
    3000,
    [count]
  );

  return (
    <div className="App">
      <h1>Hello UseTimeout Hook</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => clearTimeout()}>ClearTimeOut</button>
      
      <button onClick={() => resetTimeout()}>resetTimeout</button>

      <br />

      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Increase Count {count}
      </button>
    </div>
  );
}
