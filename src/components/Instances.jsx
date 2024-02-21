import PropTypes from "prop-types";

const Instances = ({ closeInstance }) => {
  return (
    <div className="panel panel-instance">
      <div className="panel-header">
        <h2>Instance Details</h2>
        <button className="close" onClick={closeInstance}>
          X
        </button>
      </div>

      <div className="config_container">
        <table className="table_instance">
          <tbody>
            <tr>
              <td>Instance ID</td>
              <td>Instance ID</td>
            </tr>
            <tr>
              <td>Host Name</td>
              <td>Host Name</td>
            </tr>
            <tr>
              <td>Instance Type</td>
              <td>Instance Type</td>
            </tr>
            <tr>
              <td>IP Address</td>
              <td>IP Address</td>
            </tr>
            <tr>
              <td>Availability Zone</td>
              <td>Availability Zone</td>
            </tr>
            <tr>
              <td>RoleType</td>
              <td>RoleType</td>
            </tr>
            <tr>
              <td>CreatorName</td>
              <td>CreatorName</td>
            </tr>
            <tr>
              <td>CreateDate</td>
              <td>CreateDate</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

Instances.propTypes = {
  closeInstance: PropTypes.func.isRequired,
};
export default Instances;
