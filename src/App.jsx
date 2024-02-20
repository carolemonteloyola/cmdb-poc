import "./App.css";

import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [hasResults, setHasResults] = useState(false);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    if (text.trim() !== "") {
      setHasResults(true);
    } else {
      setHasResults(false);
    }
  };

  return (
    <>
      <nav className="sticky">
        <h1>CMDB</h1>
      </nav>

      <div className="container">
        <div className="panel">
          <h2>Instance</h2>

          <div className="config">
            <span>Stacks:</span>
            <input type="text" size={14} value={text} onChange={handleChange} />
            <button onClick={handleClick}>Search</button>
          </div>

          {hasResults && (
            <div className="config_container">
              <div className="config">
                <span>Host Name</span>
                <p>hostname here</p>
              </div>
              <div className="config">
                <span>Instance Type</span>
                <p>instance type here</p>
              </div>
              <div className="config">
                <span>IP Address</span>
                <p>ip address here</p>
              </div>
              <div className="config">
                <span>Availability Zone</span>
                <p>az here</p>
              </div>
            </div>
          )}
        </div>

        <div className="panel panel_details">
          <h2>History</h2>

          {hasResults && (
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Event</th>
                  <th>Username</th>
                  <th>Full Log</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>February 20, 2024</td>
                  <td>5:49 AM</td>
                  <td>CreateTags</td>
                  <td>cmonteloyola</td>
                  <td>
                    <a href="">Cloudtrail</a>
                  </td>
                </tr>
                <tr>
                  <td>January 15, 2024</td>
                  <td>1:00 PM</td>
                  <td>Configuration Change</td>
                  <td>rrestauro</td>
                  <td>
                    <a href="">Cloudtrail</a>
                  </td>
                </tr>
                <tr>
                  <td>February 20, 2024</td>
                  <td>5:49 AM</td>
                  <td>CreateTags</td>
                  <td>cmonteloyola</td>
                  <td>
                    <a href="">Cloudtrail</a>
                  </td>
                </tr>
                <tr>
                  <td>January 15, 2024</td>
                  <td>1:00 PM</td>
                  <td>Configuration Change</td>
                  <td>rrestauro</td>
                  <td>
                    <a href="">Cloudtrail</a>
                  </td>
                </tr>
                <tr>
                  <td>February 20, 2024</td>
                  <td>5:49 AM</td>
                  <td>CreateTags</td>
                  <td>cmonteloyola</td>
                  <td>
                    <a href="">Cloudtrail</a>
                  </td>
                </tr>
                <tr>
                  <td>January 15, 2024</td>
                  <td>1:00 PM</td>
                  <td>Configuration Change</td>
                  <td>rrestauro</td>
                  <td>
                    <a href="">Cloudtrail</a>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>

        {/* <div className="panel panel_logs">
          <h2>Logs</h2>

          <div className="logs">
            {
              '{Configuration.NetworkInterfaces.0: {"attachment":{"attachTime":"2024-02-19T21:26:57.000Z","attachmentId":"eni-attach-01dbb98ba4bca9f20","deleteOnTermination":true,"deviceIndex":0,"status":"attached","networkCardIndex":0},"description":"","groups":[{"groupName":"argo-cluster-nodegroup-20240219-212544-NodeSecurityGroup-NSK66Q7MOJFB","groupId":"sg-033796fde3449658c"},{"groupName":"default","groupId":"sg-06adad16037b67f1d"}],"ipv6Addresses":[],"macAddress":"02:8a:5c:70:a3:31","networkInterfaceId":"eni-0e7f23dd3306fb946","ownerId":"957236237862","privateDnsName":"ip-10-14-174-167.us-west-2.compute.internal","privateIpAddress":"10.14.174.167","privateIpAddresses":[{"primary":true,"privateDnsName":"ip-10-14-174-167.us-west-2.compute.internal","privateIpAddress":"10.14.174.167"}],"sourceDestCheck":true,"status":"in-use","subnetId":"subnet-07ff3e302dc23b377","vpcId":"vpc-0b2710d480e87ce5c","interfaceType":"interface"}}'
            }
          </div>
        </div> */}
      </div>
    </>
  );
}

export default App;
