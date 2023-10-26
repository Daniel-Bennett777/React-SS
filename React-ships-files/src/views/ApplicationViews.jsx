import { Route, Routes, Outlet} from "react-router-dom";
import { Home } from "../Components/home"; 
import { NavBar } from "../Components/Nav/Navbar";
import { Ships } from "../Components/ships";
import { Haulers } from "../Components/haulers";
import {EditHauler} from "../Components/edithaulers";




export const ApplicationViews = () => {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <>
            <NavBar />
            <Home />
            <Outlet />
          </>
        }
      />
      <Route
        path="/ships"
        element={
          <>
            <NavBar />
            <Ships />
            <Outlet />
          </>
        }
      />
      <Route
        path="/haulers"
        element={
          <>
            <NavBar />
            <Haulers />
            <Outlet />
          </>
          
        }
      />
     <Route
        path="/edit/:haulerId"
        element={
          <>
            <NavBar/>
            <EditHauler />
            <Outlet />
          </>
          
        }
      />
    </Routes>
  );
}