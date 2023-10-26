import React, { useState, useEffect } from "react";
import { getExpandedShips } from "./Services/Fetch";


export const Ships = () => {
  const [shipData, setShipData] = useState([]);

  useEffect(() => {
    // Fetch ship data when the component mounts
    getExpandedShips().then((data) => {
      setShipData(data);
    });
  }, []);

  const handleDeleteShip = async (shipId) => {
    try {
      // Send a DELETE request to remove the ship
      await deleteShip(shipId);

      // Re-fetch the updated list of ships (excluding the deleted ship)
      const updatedShips = ships.filter((ship) => ship.id !== shipId);
      setShips(updatedShips);
    } catch (error) {
      console.error('Error deleting ship:', error);
    }
  };

  return (
    <div>
      <h2>Ships</h2>
      <ul>
        {shipData.map((ship) => (
          <li key={ship.id}>
            Ship Name- {ship.name} - Hauler Name- {ship.hauler_name}
            <button onClick={() => handleDeleteShip(ship.id)}>Delete Ship</button>
          </li>
        ))}
      </ul>
    </div>
  );
};