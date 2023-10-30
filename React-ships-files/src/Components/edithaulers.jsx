import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleHauler, updateHauler, getDocks } from "./Services/Fetch";

export const EditHauler = () => {
  const { haulerId } = useParams();
  const [hauler, setHauler] = useState(null);
  const [name, setName] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [selectedDock, setSelectedDock] = useState("");
  const [docks, setDocks] = useState([]);
  const [error, setError] = useState(null); // State for error messages

  const navigate = useNavigate();

  useEffect(() => {
    getSingleHauler(haulerId)
      .then((data) => {
        setHauler(data);
        setName(data.name);
        setSelectedDock(data.dock_id);
      })
      .catch((error) => {
        setError("Error fetching hauler data.");
      });

    getDocks()
      .then((data) => {
        setDocks(data);
      })
      .catch((error) => {
        setError("Error fetching docks data.");
      });
  }, [haulerId]);

  const handleUpdateHauler = (haulerId) => {
    updateHauler(haulerId, {
      name: enteredName,
      dock_id: selectedDock,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.error(`Update request failed: ${response.statusText}`);
          throw new Error('Failed to update hauler');
        }
      })
      .then((updatedHaulerData) => {
        // Assuming you have appropriate setter functions for these states
        setName(updatedHaulerData.name); // Set the updated name
        setSelectedDock(updatedHaulerData.dock_id); // Set the updated dock
        navigate("/haulers");
      })
      .catch((error) => {
        console.error("Error updating hauler:", error);
        setError("Error updating hauler.");
      });
  };

  const handleDockChange = (e) => {
    setSelectedDock(parseInt(e.target.value));
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
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
              placeholder={name}
            />
          </label>
          <label>
            Dock:
            {docks.map((dock) => (
              <label key={dock.id}>
                <input
                  type="radio"
                  name="dock"
                  value={dock.id}
                  checked={selectedDock === dock.id}
                  onChange={handleDockChange}
                />
                {dock.location}
              </label>
            ))}
          </label>
          {error && <div className="error-message">{error}</div>}
          <button onClick={() => handleUpdateHauler(haulerId)}>Update</button>
        </form>
      )}
    </div>
  );
};
