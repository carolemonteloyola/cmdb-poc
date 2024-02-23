import "./App.css";

import Instances from "./components/Instances";
import InstancesData from "./data/instances.json";
import StacksList from "./components/StacksList";
import { useState } from "react";

function App() {
  const [showInstances, setShowInstances] = useState(false);
  const [selectedStackRow, setSelectedStackRow] = useState(null);
  const [instanceInfo, setInstanceInfo] = useState([{}]);
  const [selectedHistoryRow, setSelectedHistoryRow] = useState();
  const [historyData, setHistoryData] = useState();

  // handle Stack click
  const handleStackClick = (StackName) => {
    setShowInstances(true);
    setSelectedStackRow(StackName);
    setInstanceInfo(queryInstanceInfo(StackName));

    //reset history selection
    setSelectedHistoryRow();
    setHistoryData();
  };

  // close instance
  const closeInstance = () => {
    setShowInstances(false);
    setSelectedStackRow();
  };

  // get Instance info based on StackName - Ascending
  const queryInstanceInfo = (StackName) => {
    return InstancesData.filter(
      (instance) => instance.StackName === StackName
    ).sort((a, b) => new Date(a.CreatedDate) - new Date(b.CreatedDate));
  };

  // When one of the history rows is clicked
  const handleHistoryClick = (CreatedDate, CreatorName) => {
    setSelectedHistoryRow(CreatedDate);
    setHistoryData(queryHistoryDetails(CreatedDate, CreatorName));
  };

  // When one of the history rows is clicked, show the entire object
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
            selectedStackRow={selectedStackRow}
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
