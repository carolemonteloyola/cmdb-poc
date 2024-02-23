import "./App.css";

import Instances from "./components/Instances";
import InstancesData from "./data/instances.json";
import StacksList from "./components/StacksList";
import { useState } from "react";

function App() {
  const [showInstances, setShowInstances] = useState(false);
  const [selectedStackRow, setSelectedStackRow] = useState(null);
  const [initConfigInfo, setInitConfigInfo] = useState([{}]);
  const [instanceInfo, setInstanceInfo] = useState([{}]);
  const [selectedHistoryRow, setSelectedHistoryRow] = useState();
  const [historyData, setHistoryData] = useState();

  // handle Stack click
  const handleStackClick = (StackName) => {
    setShowInstances(true);
    setSelectedStackRow(StackName);
    setInitConfigInfo(queryInitConfigBasedOnStack(StackName));
    setInstanceInfo(queryInstanceBasedOnStack(StackName));

    //reset history selection
    setSelectedHistoryRow();
    setHistoryData();
  };

  // close instance
  const closeInstance = () => {
    setShowInstances(false);
    setSelectedStackRow();
  };

  // get Stack info (Initial Config) based on StackName
  const queryInitConfigBasedOnStack = (StackName) => {
    return InstancesData.filter(
      (instance) => instance.StackName === StackName
    ).sort((a, b) => new Date(a.CreatedDate) - new Date(b.CreatedDate));
  };

  // get Instance info based on StackName
  const queryInstanceBasedOnStack = (StackName) => {
    return InstancesData.filter(
      (instance) => instance.StackName === StackName
    ).sort((a, b) => new Date(b.CreatedDate) - new Date(a.CreatedDate));
  };

  const handleHistoryClick = (CreatedDate, CreatorName) => {
    setSelectedHistoryRow(CreatedDate);
    setHistoryData(queryHistoryDetails(CreatedDate, CreatorName));
    console.log("historyData", historyData);
  };

  const queryHistoryDetails = (CreatedDate, CreatorName) => {
    return instanceInfo.find(
      (instance) =>
        instance.CreatedDate === CreatedDate &&
        instance.CreatorName === CreatorName
    );
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
            handleHistoryClick={handleHistoryClick}
            selectedHistoryRow={selectedHistoryRow}
            historyData={historyData}
          />
        )}
      </div>
    </>
  );
}

export default App;
