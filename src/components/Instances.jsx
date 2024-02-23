import { useCallback, useEffect, useState } from "react";

import PropTypes from "prop-types";

const Instances = ({
  closeInstance,
  selectedStackRow,
  handleHistoryClick,
  selectedHistoryRow,
  historyData,
  resultInstanceQuery,
}) => {
  const [initConfig, setInitConfig] = useState([{}]);
  const [latestConfig, setLatestConfig] = useState([{}]);

  const queryInitConfig = useCallback(
    (StackName) => {
      return resultInstanceQuery
        .filter((instance) => instance.StackName === StackName)
        .sort((a, b) => new Date(a.CreationDate) - new Date(b.CreationDate));
    },
    [resultInstanceQuery]
  );

  const queryLatestConfig = useCallback(
    (StackName) => {
      return resultInstanceQuery
        .filter((instance) => instance.StackName === StackName)
        .sort((a, b) => new Date(b.CreationDate) - new Date(a.CreationDate));
    },
    [resultInstanceQuery]
  );

  useEffect(() => {
    setInitConfig(queryInitConfig(selectedStackRow));
    setLatestConfig(queryLatestConfig(selectedStackRow));
  }, [
    queryInitConfig,
    queryLatestConfig,
    selectedStackRow,
    resultInstanceQuery,
  ]);

  // Extract headers from the resultInstanceQuery file
  let headerData = [];
  if (initConfig.length > 0) {
    headerData = Object.keys(initConfig[0]);
  }

  let hasInstanceChanges = [];
  if (latestConfig.length > 0) {
    hasInstanceChanges =
      latestConfig !== undefined && latestConfig[0].length > 0 ? true : false;
  }

  // Compare Instance config table values
  const compareConfigValues = (hasInstanceChanges, a, b) => {
    return hasInstanceChanges && a != b ? (
      <td className="highlight">{a}</td>
    ) : (
      <td>{a}</td>
    );
  };

  // Display Init and Latest Instances in table
  const renderInstanceTableBody = () => {
    return headerData.map((header, index) => {
      const initialConfigValue =
        initConfig[0][header] !== undefined
          ? initConfig[0][header].toString()
          : "-";
      const currentConfigValue =
        hasInstanceChanges && latestConfig[0][header] !== undefined
          ? latestConfig[0][header].toString()
          : "-";

      return (
        <tr key={index}>
          <td>
            <strong>{header}</strong>
          </td>
          {compareConfigValues(
            hasInstanceChanges,
            initialConfigValue,
            currentConfigValue
          )}
          {compareConfigValues(
            hasInstanceChanges,
            currentConfigValue,
            initialConfigValue
          )}
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
                <th>Creation Date</th>
                <th>Creator Name</th>
              </tr>
            </thead>
            <tbody>
              {resultInstanceQuery
                .sort(
                  (a, b) => new Date(b.CreationDate) - new Date(a.CreationDate)
                )
                .map((history) => (
                  <tr
                    key={history.InstanceId}
                    className={
                      selectedHistoryRow === history.InstanceId
                        ? "selected"
                        : ""
                    }
                  >
                    <td>
                      <a
                        href="#"
                        onClick={() => handleHistoryClick(history.InstanceId)}
                      >
                        {history.CreationDate}
                      </a>
                    </td>
                    <td>{history.CreatorName}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          {historyData && (
            <div>
              <textarea readOnly value={JSON.stringify(historyData, null, 2)} />{" "}
            </div>
          )}
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
  selectedStackRow: PropTypes.string.isRequired,
  handleHistoryClick: PropTypes.func.isRequired,
  selectedHistoryRow: PropTypes.string,
  historyData: PropTypes.object,
  resultInstanceQuery: PropTypes.array.isRequired,
};
export default Instances;
