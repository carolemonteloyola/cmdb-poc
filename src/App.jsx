import "./App.css";

import Instances from "./components/Instances";
import StacksList from "./components/StacksList";
import { useState } from "react";

function App() {
  const [showInstances, setShowInstances] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleClick = (rowId) => {
    setShowInstances(true);
    setSelectedRow(rowId);
  };
  const closeInstance = () => {
    setShowInstances(false);
  };

  return (
    <>
      <nav className="sticky">
        <h1>Configuration Management Database POC</h1>
      </nav>

      <div className="container">
        <StacksList handleClick={handleClick} selectedRow={selectedRow} />
        {showInstances && <Instances closeInstance={closeInstance} />}
      </div>
    </>
  );
}

export default App;
