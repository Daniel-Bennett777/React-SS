import React, { useEffect, useState } from "react";
import { getDocks, getHaulers, getShips } from "./Services/Fetch";

export const Home = () => {
  const [ships, setShips] = useState([]);
  const [haulers, setHaulers] = useState([]);
  const [docks, setDocks] = useState([]);

  useEffect(() => {
    // Fetch ships
    getShips().then((shipData) => {
      setShips(shipData);
    });

    // Fetch haulers
    getHaulers().then((haulerData) => {
      setHaulers(haulerData);
    });

    // Fetch docks
    getDocks().then((dockData) => {
      setDocks(dockData);
    });
  }, []);

  return (
    <div>
      <h2>Ships</h2>
      <ul>
        {ships.map((ship) => (
          <li key={ship.id}>{ship.name}</li>
        ))}
      </ul>

      <h2>Haulers</h2>
      <ul>
        {haulers.map((hauler) => (
          <li key={hauler.id}>{hauler.name}</li>
        ))}
      </ul>

      <h2>Docks</h2>
      <ul>
        {docks.map((dock) => (
          <li key={dock.id}>{dock.location}</li>
        ))}
      </ul>
    </div>
  );
};
