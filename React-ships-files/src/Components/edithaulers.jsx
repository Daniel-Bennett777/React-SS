import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getSingleHauler, updateHauler } from "./Services/Fetch";


export const EditHauler = () => {
  const { haulerId } = useParams();
  const location = useLocation();
  const haulerName = location.state.haulerName || '';
  const [hauler, setHauler] = useState(null);
  const [name, setName] = useState("");
  const [selectedDock, setSelectedDock] = useState("");

  useEffect(() => {
    // Fetch hauler data based on haulerId when the component mounts
    getSingleHauler(haulerId).then((data) => {
      setHauler(data);
      setName(data.name); // Pre-fill the name field
      setSelectedDock(data.dockId); // Pre-select the current dock assignment
    });
  }, [haulerId]);

  const handleUpdateHauler = async () => {
    try {
      // Send a PUT request to update the hauler's details
      const updatedHauler = await updateHauler(haulerId, {
        name,
        dockId: selectedDock,
      });
      
      // Handle success, e.g., navigate back to the list of haulers
    } catch (error) {
      console.error('Error updating hauler:', error);
    }
  };

  return (
    <div>
      <h2>Edit Hauler</h2>
      {hauler && (
        <form>
         <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={haulerName}
            />
          </label>
          <label>
            Dock:
            <select
              value={selectedDock}
              onChange={(e) => setSelectedDock(e.target.value)}
            >
              {/* Populate options based on available docks */}
            </select>
          </label>
          <button onClick={handleUpdateHauler}>Update</button>
        </form>
      )}
    </div>
  );
};
