import React, { useState, useEffect} from "react";
import { getHaulers } from "./Services/Fetch";
import { useNavigate } from 'react-router-dom';

export const Haulers = () => {
  const [haulers, setHaulers] = useState([]);
    const navigate = useNavigate()
  useEffect(() => {
    // Fetch hauler data when the component mounts
    getHaulers().then((data) => {
      setHaulers(data);
    });
  }, []);

  const handleEditHauler = (haulerId, haulerName) => {
    navigate(`/edit/${haulerId}`, { state: { haulerName } });
  };

  return (
    <div>
      <h2>Haulers</h2>
      <ul>
        {haulers.map((hauler) => (
          <li key={hauler.id}>
            {hauler.name}
            <button onClick={() => handleEditHauler(hauler.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};