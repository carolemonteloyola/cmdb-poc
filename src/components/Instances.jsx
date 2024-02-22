import PropTypes from "prop-types";

const Instances = ({
  closeInstance,
  instanceInfo,
  initConfigInfo,
  history,
}) => {
  // Extract headers from the instancesData file
  const headerData = Object.keys(instanceInfo[0]);
  console.log("history", history);
  const compareConfigValues = (a, b) => {
    return a != b ? <td className="highlight">{a}</td> : <td>{a}</td>;
  };

  // Function to create table header row
  const renderInstanceTableBody = () => {
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
            <tbody>{renderInstanceTableBody()}</tbody>
          </table>
        </div>
      </div>
      <div className="panel-instance-section spacer"></div>
      <div className="panel-instance-section panel-history">
        <div className="panel-header panel-flex-col">
          <h2>History</h2>
        </div>
        <div className="config_container">
          <table>
            <thead>
              <tr>
                <th>Create Date</th>
                <th>Creator Name</th>
              </tr>
            </thead>
            <tbody>
              {history.map((history, index) => (
                <tr key={index}>
                  <td>{history.CreateDate}</td>
                  <td>{history.CreatorName}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
  history: PropTypes.array,
};
export default Instances;
