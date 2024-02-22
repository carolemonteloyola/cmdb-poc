import "./App.css";

import InitConfigData from "./data/initialconfig.json";
import Instances from "./components/Instances";
import InstancesData from "./data/instances.json";
import StacksList from "./components/StacksList";
import { useState } from "react";

function App() {
  const [showInstances, setShowInstances] = useState(false);
  const [selectedStackRow, setSelectedStackRow] = useState(null);
  const [initConfigInfo, setInitConfigInfo] = useState([{}]);
  const [instanceInfo, setInstanceInfo] = useState([{}]);
  const [history, setHistory] = useState([{}]);

  // handle Stack click
  const handleStackClick = (StackName) => {
    setShowInstances(true);
    setSelectedStackRow(StackName);
    setInitConfigInfo(queryInitConfigBasedOnStack(StackName));
    setInstanceInfo(queryInstanceBasedOnStack(StackName));
    setHistory(queryHistoryBasedOnStack(StackName));
  };

  // close instance
  const closeInstance = () => {
    setShowInstances(false);
    setSelectedStackRow();
  };

  // get Stack info (Initial Config) based on StackName
  const queryInitConfigBasedOnStack = (StackName) => {
    return InitConfigData.filter(
      (instance) => instance.StackName === StackName
    );
  };

  // get Instance info based on StackName
  // TODO: get latest
  const queryInstanceBasedOnStack = (StackName) => {
    return InstancesData.filter((instance) => instance.StackName === StackName);
  };

  // get history based on Instance ID
  const queryHistoryBasedOnStack = (StackName) => {
    return InstancesData.filter((history) => history.StackName === StackName);
  };

  return (
    <>
      <nav className="sticky">
        <h1>Configuration Management Database POC</h1>
      </nav>

      <div className="container">
        <StacksList
          handleStackClick={handleStackClick}
          selectedStackRow={selectedStackRow}
        />
        {showInstances && (
          <Instances
            closeInstance={closeInstance}
            instanceInfo={instanceInfo}
            initConfigInfo={initConfigInfo}
            history={history}
          />
        )}
      </div>
    </>
  );
}

export default App;
