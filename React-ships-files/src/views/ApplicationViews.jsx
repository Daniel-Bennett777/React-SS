import { Route, Routes, Outlet} from "react-router-dom";
import { Home } from "../Components/home"; 
import { NavBar } from "../Components/Nav/Navbar";
import { Ships } from "../Components/ships";




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
    </Routes>
  );
}