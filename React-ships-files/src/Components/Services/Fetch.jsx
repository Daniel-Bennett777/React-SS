const API_BASE_URL = 'http://localhost:8000';

export async function getShips() {
  const response = await fetch(`${API_BASE_URL}/ships`);
  if (!response.ok) {
    throw new Error('Failed to fetch ships');
  }
  const ships = await response.json();
  return ships;
}

export async function getHaulers() {
  const response = await fetch(`${API_BASE_URL}/haulers`);
  if (!response.ok) {
    throw new Error('Failed to fetch haulers');
  }
  const haulers = await response.json();
  return haulers;
}

export async function getDocks() {
  const response = await fetch(`${API_BASE_URL}/docks`);
  if (!response.ok) {
    throw new Error('Failed to fetch docks');
  }
  const docks = await response.json();
  return docks;
}

export async function getExpandedShips() {
    const response = await fetch(`${API_BASE_URL}/ships?_expand=haulers`);
    if (!response.ok) {
        throw new Error('Failed to fetch ships and haulers');
    }
    const expandedShips = await response.json();
    return expandedShips;
}

export async function deleteShip(shipId) {
    const response = await fetch(`${API_BASE_URL}/ships/${shipId}`, {
      method: 'DELETE',
    });
  
    if (!response.ok) {
      throw new Error('Failed to delete the ship');
    }
  }

  export async function updateHauler(haulerId, updatedData) {
    const response = await fetch(`${API_BASE_URL}/haulers/${haulerId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
  
    if (!response.ok) {
      throw new Error('Failed to update hauler');
    }
  
    const updatedHauler = await response.json(); // Return the updated hauler data
  
    return updatedHauler;
  }
    export async function getSingleHauler(haulerId) {
        const response = await fetch(`${API_BASE_URL}/haulers/${haulerId}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch hauler with id ${haulerId}`);
        }
        const haulerData = await response.json();
        return haulerData;
      }
export async function getExpandedDocks() {
    const response = await fetch(`${API_BASE_URL}/haulers?_expand=docks`);
    if (!response.ok) {
        throw new Error('Failed to fetch ships and haulers');
    }
    const expandedDocks = await response.json();
    return expandedDocks;
}