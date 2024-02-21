import { useEffect, useState } from "react";

import PropTypes from "prop-types";
import stacksData from "../data/stacks.json";

const StacksList = ({ handleClick, selectedRow }) => {
  /*const [stacks, setStacks] = useState([]);

   useEffect(() => {
    fetch(stacksData)
      .then((response) => response.json())
      .then((data) => setStacks(data))
      .catch((error) => console.error("Error fetching data:", error));
  }); */

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
          </tr>
        </thead>
        <tbody>
          {stacksData.map((stack) => (
            <tr
              key={stack.id}
              className={selectedRow === stack.id ? "selected" : ""}
            >
              <td>
                <a href="#" onClick={() => handleClick(stack.id)}>
                  {stack.StackName}
                </a>
              </td>
              <td>{stack.ConfigType}</td>
              <td>{stack.Environment}</td>
              <td>{stack.SQLVersion}</td>
              <td>{stack.Timestamp}</td>
              <td>{stack.CreatorName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

StacksList.propTypes = {
  handleClick: PropTypes.func.isRequired,
  selectedRow: PropTypes.number,
};

export default StacksList;
