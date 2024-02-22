import PropTypes from "prop-types";

const Instances = ({ closeInstance, instanceInfo, initConfigInfo }) => {
  // Extract headers from the instancesData file
  const headerData = Object.keys(instanceInfo[0]);

  const compareConfigValues = (a, b) => {
    return a != b ? <td className="highlight">{a}</td> : <td>{a}</td>;
  };

  // Function to create table header row
  const renderHeaderCol = () => {
    return headerData.map((header, index) => {
      const initialConfigValue =
        initConfigInfo[0][header] !== undefined
          ? initConfigInfo[0][header]
          : "-";
      const currentConfigValue =
        instanceInfo[0][header] !== undefined ? instanceInfo[0][header] : "-";
      return (
        <tr key={index}>
          <td>
            <strong>{header}</strong>
          </td>
          {compareConfigValues(initialConfigValue, currentConfigValue)}
          {compareConfigValues(currentConfigValue, initialConfigValue)}
        </tr>
      );
    });
  };

  return (
    <div className="panel panel-flex panel-flex-row panel-instances">
      <div className="panel-instance-section panel-instances">
        <div className="panel-header panel-flex-row">
          <h2>Instance Details</h2>
        </div>

        <div className="config_container">
          <table>
            <thead>
              <tr>
                <th>Config Name</th>
                <th>Initial Config</th>
                <th>Latest Config</th>
              </tr>
            </thead>
            <tbody>{renderHeaderCol()}</tbody>
          </table>

          {/* <table className="table_instance">
          <thead>
            <th>
              <td></td>
            </th>
            <th>
              <td>Initial Config</td>
            </th>
            <th>
              <td>Latest Config</td>
            </th>
          </thead>
          <tbody>
            <tr>
              <td>Instance ID</td>
              <td>A</td>
              <td>B</td>
            </tr>
            <tr>
              <td>Host Name</td>
              <td>A</td>
              <td>B</td>
            </tr>
            <tr>
              <td>Instance Type</td>
              <td>A</td>
              <td>B</td>
            </tr>
            <tr>
              <td>IP Address</td>
              <td>A</td>
              <td>B</td>
            </tr>
            <tr>
              <td>Availability Zone</td>
              <td>A</td>
              <td>B</td>
            </tr>
            <tr>
              <td>RoleType</td>
              <td>A</td>
              <td>B</td>
            </tr>
            <tr>
              <td>CreatorName</td>
              <td>A</td>
              <td>B</td>
            </tr>
            <tr>
              <td>CreateDate</td>
              <td>A</td>
              <td>B</td>
            </tr>
          </tbody>
        </table> */}
        </div>
      </div>
      <div className="panel-instance-section panel-history">
        <div className="panel-header">
          <h2>History</h2>
        </div>
      </div>
      <div className="panel-header panel-flex-col">
        <button className="close" onClick={closeInstance}>
          X
        </button>
      </div>
    </div>
  );
};

Instances.propTypes = {
  closeInstance: PropTypes.func.isRequired,
  instanceInfo: PropTypes.array.isRequired,
  initConfigInfo: PropTypes.array.isRequired,
};
export default Instances;
