import "./App.css";

import { useState } from "react";

function App() {
  const [showInstances, setShowInstances] = useState(false);

  const handleClick = () => {
    if (!showInstances) {
      setShowInstances(true);
    } else {
      setShowInstances(false);
    }
  };

  return (
    <>
      <nav className="sticky">
        <h1>CMDB</h1>
      </nav>

      <div className="container">
        <div className="panel">
          <h2>Stacks</h2>

          <table>
            <thead>
              <tr>
                <th>StackName</th>
                <th>ConfigType</th>
                <th>Environment</th>
                <th>SQLVersion</th>
                <th>Timestamp</th>
                <th>CreatorName</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>StackName</td>
                <td>ConfigType</td>
                <td>Environment</td>
                <td>SQLVersion</td>
                <td>Timestamp</td>
                <td>CreatorName</td>
                <td>
                  <button onClick={handleClick}>Instances</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {showInstances && (
          <div className="panel">
            <div className="panel-header">
              <h2>Instances</h2>
              <button className="close" onClick={handleClick}>
                X
              </button>
            </div>
            <table>
              <thead>
                <tr>
                  <th>InstanceId</th>
                  <th>HostName</th>
                  <th>InstanceType</th>
                  <th>PrivateIP</th>
                  <th>AZ</th>
                  <th>RoleType</th>
                  <th>CreatorName</th>
                  <th>CreateDate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>InstanceId</td>
                  <td>HostName</td>
                  <td>InstanceType</td>
                  <td>PrivateIP</td>
                  <td>AZ</td>
                  <td>RoleType</td>
                  <td>CreatorName</td>
                  <td>CreateDate</td>
                </tr>
                <tr>
                  <td>InstanceId</td>
                  <td>HostName</td>
                  <td>InstanceType</td>
                  <td>PrivateIP</td>
                  <td>AZ</td>
                  <td>RoleType</td>
                  <td>CreatorName</td>
                  <td>CreateDate</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
