// import { useState } from "react";
// import Home from "./components/Home";
// import HomeSWR from "./components/HomeSWR";
// import Characters from "./components/PaginatedCharacters";
// import User from "./components/PrefetchUsers";
import LoadMoreData from "./components/LoadMoreButton";
import "./App.css";

function App() {
  // const [show, setShow] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>First App to SWR data fetching library</h1>
      </header>
      <main className="App-content">
        {/* <Home /> */}
        {/* <HomeSWR /> */}
        {/* 
          <button onClick={() => setShow(true)}>Show Users</button>
          {show ? <User /> : null}
         */}
        {/* <Characters /> */}
        <LoadMoreData />
      </main>
    </div>
  );
}

export default App;
