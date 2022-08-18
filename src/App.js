import JsonDataDisplay from "./components/CustomersTable";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

function App() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="App">
      <h1>Customers</h1>

      <button onClick={handlePrint} className="print__button">
        Print
      </button>
      <div ref={componentRef} className="card">
        <div>
          <h3>
            <JsonDataDisplay />
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
