import PropTypes from "prop-types";
import initialConfigData from "../data/initialconfig.json";
import instancesData from "../data/instances.json";

const Instances = ({ closeInstance }) => {
  // Extract headers from the instancesData file
  const headerData = Object.keys(instancesData[0]);

  // Function to create table header row
  const renderHeaderCol = () => {
    return headerData.map((header, index) => {
      const initialConfigValue = initialConfigData[0][header];
      const currentConfigValue = instancesData[0][header];
      return (
        <tr key={index}>
          <td>{header}</td>
          <td>{initialConfigValue !== undefined ? initialConfigValue : "-"}</td>
          <td>{currentConfigValue !== undefined ? currentConfigValue : "-"}</td>
        </tr>
      );
    });
  };

  return (
    <div className="panel panel-instance">
      <div className="panel-header">
        <h2>Instance Details</h2>
        <button className="close" onClick={closeInstance}>
          X
        </button>
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
  );
};

Instances.propTypes = {
  closeInstance: PropTypes.func.isRequired,
};
export default Instances;
