import { useRef, useState } from "react";
import Header from "./components/Header";
import HeaderMemo from "./components/HeaderMemo";
import TaxComp from "./components/TaxComp";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("cemalettin");
  const taxData = { taxRate: 0.18, ship: 25 };
  const [taxDataState, setTaxDataState] = useState({
    taxRate: 0.18,
    ship: 25,
  });
  const taxData1 = useRef({
    taxRate: 0.18,
    ship: 25,
  });
  console.log("taxData1");
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
      {/* <HeaderMemo user={user} /> */}
      <HeaderMemo count={count} />
      <hr />
      {/* <TaxComp taxData ={taxData} /> */}
      {/* <TaxComp taxData={taxData} /> */}
      <br />
      <TaxComp taxData={taxData1} />
    </div>
  );
}

export default App;
