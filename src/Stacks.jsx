import PropTypes from "prop-types";

const Stacks = ({ handleClick }) => {
  return (
    <div className="panel panel-stacks">
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
  );
};

Stacks.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Stacks;
