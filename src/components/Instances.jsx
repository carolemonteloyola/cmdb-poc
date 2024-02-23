import { useCallback, useEffect, useState } from "react";

import PropTypes from "prop-types";

const Instances = ({
  closeInstance,
  instanceInfo,
  selectedStackRow,
  handleHistoryClick,
  selectedHistoryRow,
  historyData,
}) => {
  const [initConfig, setInitConfig] = useState([{}]);
  const [latestConfig, setLatestConfig] = useState([{}]);

  const queryInitConfig = useCallback(
    (StackName) => {
      return instanceInfo
        .filter((instance) => instance.StackName === StackName)
        .sort((a, b) => new Date(a.CreatedDate) - new Date(b.CreatedDate));
    },
    [instanceInfo]
  );

  const queryLatestConfig = useCallback(
    (StackName) => {
      const StackInstances = instanceInfo
        .filter((instance) => instance.StackName === StackName)
        .sort((a, b) => new Date(b.CreatedDate) - new Date(a.CreatedDate));
      if (StackInstances.length > 1) {
        return StackInstances;
      } else {
        return [];
      }
    },
    [instanceInfo]
  );

  useEffect(() => {
    setInitConfig(queryInitConfig(selectedStackRow));
    setLatestConfig(queryLatestConfig(selectedStackRow));
  }, [queryInitConfig, queryLatestConfig, selectedStackRow]);

  // Extract headers from the instancesData file
  const headerData = Object.keys(initConfig[0]);

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
    const hasInstanceChanges =
      latestConfig !== undefined && latestConfig.length > 0 ? true : false;

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
                <th>Created Date</th>
                <th>Creator Name</th>
              </tr>
            </thead>
            <tbody>
              {instanceInfo
                .sort(
                  (a, b) => new Date(b.CreatedDate) - new Date(a.CreatedDate)
                )
                .map((history) => (
                  <tr
                    key={history.CreatedDate}
                    className={
                      selectedHistoryRow === history.CreatedDate
                        ? "selected"
                        : ""
                    }
                  >
                    <td>
                      <a
                        href="#"
                        onClick={() =>
                          handleHistoryClick(
                            history.CreatedDate,
                            history.CreatorName
                          )
                        }
                      >
                        {history.CreatedDate}
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
  instanceInfo: PropTypes.array.isRequired,
  selectedStackRow: PropTypes.string.isRequired,
  handleHistoryClick: PropTypes.func.isRequired,
  selectedHistoryRow: PropTypes.string,
  historyData: PropTypes.object,
};
export default Instances;
