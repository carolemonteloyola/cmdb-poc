import "./App.css";

import { useEffect, useState } from "react";

import Instances from "./components/Instances";
import StacksList from "./components/StacksList";

function App() {
  const [showInstances, setShowInstances] = useState(false);
  const [selectedStackRow, setSelectedStackRow] = useState(null);
  const [selectedHistoryRow, setSelectedHistoryRow] = useState();
  const [historyData, setHistoryData] = useState();
  const [instancesData, setInstancesData] = useState([]);
  const [resultInstanceQuery, setResultInstanceQuery] = useState([]);
  const [loading, setLoading] = useState(false);

  // handle Stack click
  const handleStackClick = (StackName) => {
    setShowInstances(true);
    setSelectedStackRow(StackName);
    setResultInstanceQuery(queryInstanceInfo(StackName));

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
    return instancesData
      .filter((instance) => instance.StackName === StackName)
      .sort((a, b) => new Date(a.CreationDate) - new Date(b.CreationDate));
  };

  // When one of the history rows is clicked
  const handleHistoryClick = (InstanceId) => {
    setSelectedHistoryRow(InstanceId);
    setHistoryData(queryHistoryDetails(InstanceId));
  };

  // When one of the history rows is clicked, show the entire object
  const queryHistoryDetails = (InstanceId) => {
    return instancesData.find((instance) => instance.InstanceId === InstanceId);
  };

  useEffect(() => {
    setLoading(true);

    fetch(
      "https://82v3bvf62i.execute-api.us-west-2.amazonaws.com/cmdb-test/ci?type=instance"
    )
      .then((response) => response.json())
      .then((data) => {
        const specificData = data.map((d) => d.data);
        setInstancesData(specificData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

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
        {loading && <div className="loading">Loading...</div>}
        {showInstances && (
          <Instances
            closeInstance={closeInstance}
            selectedStackRow={selectedStackRow}
            handleHistoryClick={handleHistoryClick}
            selectedHistoryRow={selectedHistoryRow}
            historyData={historyData}
            resultInstanceQuery={resultInstanceQuery}
          />
        )}
      </div>
    </>
  );
}

export default App;
