import { useState } from "react";
import Header from "./components/Header";
import HeaderMemo from "./components/HeaderMemo";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] =useState("cemalettin")

  return (
    <div className="container mt-2">
      <div>
        <Header />
      </div>
      <hr />
      <div className="">
        <p className="text-center">Count : {count}</p>
        <button
          className="btn btn-danger d-flex mx-auto"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="btn btn-success d-flex mx-auto"
          onClick={() => setUser("selahaddin")}
        >
          Change User
        </button>
      </div>
      <hr />
      <HeaderMemo user={user} />
    </div>
  );
}

export default App;
