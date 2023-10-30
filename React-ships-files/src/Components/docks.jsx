import React, { useState, useEffect } from 'react';
import { getExpandedDocks } from './Services/Fetch';

export const Dock = () => {
  const [expandedDocks, setExpandedDocks] = useState([]);

  useEffect(() => {
    // Fetch the expanded docks data
    getExpandedDocks()
      .then((data) => {
        setExpandedDocks(data);
      })
      .catch((error) => {
        console.error(`Error fetching expanded docks data: ${error}`);
      });
  }, []);

  return (
    <div>
      <h2>List of Docks</h2>
      <ul>
        {expandedDocks.map((hauler) => (
          <li key={hauler.id}>
            <strong>Dock Name:</strong> {hauler.dock.location} | <strong>Tonnage Capacity:</strong> {hauler.dock.capacity}
            <ul>
              <li>
                <strong>Hauler Name:</strong> {hauler.name}
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
