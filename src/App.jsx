import { useState } from "react";
<<<<<<< HEAD
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ProductPage from "./pages/ProductPage";
=======
>>>>>>> a74ae5fa51495e541b31afb30d8e1f6da314bf5d

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
<<<<<<< HEAD
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-primary">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button className="btn btn-primary" type="button"></button> */}
      <ProductPage />
=======
      <div>
        <h1>This is meow party</h1>
      </div>
>>>>>>> a74ae5fa51495e541b31afb30d8e1f6da314bf5d
    </>
  );
}

export default App;
