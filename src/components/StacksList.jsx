import PropTypes from "prop-types";
import stacksData from "../data/stacks.json";

const StacksList = ({ handleStackClick, selectedStackRow }) => {
  return (
    <div className="panel panel-flex panel-flex-col panel-stacks">
      <h2>Stacks</h2>

      <table>
        <thead>
          <tr>
            <th>StackName</th>
            <th>AZ</th>
            <th>Environment</th>
            <th>SQLVersion</th>
            <th>CRecordForServer</th>
            <th>CRecordAdd</th>
            <th>DiskSize</th>
            <th>ConfigType</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {stacksData.map((stack) => (
            <tr
              key={stack.StackName}
              className={selectedStackRow === stack.StackName ? "selected" : ""}
            >
              <td>
                <a href="#" onClick={() => handleStackClick(stack.StackName)}>
                  {stack.StackName}
                </a>
              </td>
              <td>{stack.AZ}</td>
              <td>{stack.Environment}</td>
              <td>{stack.SQLVersion}</td>
              <td>{stack.NameOfCRecordForServer}</td>
              <td>{stack.NameOfCRecordsAdditional}</td>
              <td>
                D: {stack.DiskSizeOfDDrive}, E: {stack.DiskSizeOfEDrive}, F:{" "}
                {stack.DiskSizeOfFDrive}, G: {stack.DiskSizeOfGDrive}, M:{" "}
                {stack.DiskSizeOfMDrive},
              </td>
              <td>{stack.ConfigType}</td>
              <td>{stack.Timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

StacksList.propTypes = {
  handleStackClick: PropTypes.func.isRequired,
  selectedStackRow: PropTypes.string,
};

export default StacksList;
