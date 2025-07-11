import React, { useEffect, useState } from "react";
import { getEarningsLog } from "../utils/logger";

const EarningsLog = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    setLogs(getEarningsLog());
  }, []);

  return (
    <div className="bg-gray-900 p-4 rounded-xl mt-4">
      <h2 className="text-lg font-bold mb-2">Swap Earnings (Dev only)</h2>
      <ul className="text-sm text-gray-300 max-h-60 overflow-y-auto">
        {logs.length === 0 ? (
          <li>No earnings logged yet.</li>
        ) : (
          logs.map((log, idx) => (
            <li key={idx} className="py-1">
              <span className="font-medium">{log.date}</span> | Fee:{" "}
              <span className="text-green-300">{log.fee}</span> | Pair:{" "}
              <span>{log.fromMint}→{log.toMint}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default EarningsLog;
