import "./App.css";
import "./home.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/main/login";
import Admin from "./components/admin";
import User from "./components/user";
import Main from "./components/main";
import Dashboard from "./components/admin/dashboard";
import Profile from "./components/admin/profile";
import Signup from "./components/main/signup";
import ManagePlan from "./components/owner/managePlan";
import ManageSlot from "./components/owner/manageslot";
import Owner from "./components/owner";
import OwnerSignup from "./components/owner/ownerSignup";
import OwnerLogin from "./components/owner/ownerLogin";
import Manageprofile from "./components/owner/manageprofile";
import BrowseSlot from "./components/user/browseSlot";
import SlotDetails from "./components/user/slotDetails";
import Home from "./components/main/home";
import PricingPlan from "./components/main/pricingPlan";
import BookSlot from "./components/user/bookslot";
import Demosignup from "./components/owner/demosignup";
import Demologin from "./components/owner/demologin";
import OwnerAuthorisor from "./components/ownerAuth";
import Authorisor from "./components/authenticator";
import BookingDetails from "./components/user/bookingDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Admin />} path="admin">
          <Route element={<Dashboard />} path="dashboard" />
          <Route element={<Profile />} path="profile" />
        </Route>

        <Route element={<Main />} path="/main">
          <Route element={<Signup />} path="signup" />
          <Route element={<Login />} path="login" />
          <Route element={<Home />} path="home" />
          <Route element={<BrowseSlot />} path="browseslot" />
          <Route element={<OwnerSignup />} path="ownersignup" />
          <Route element={<OwnerLogin />} path="ownerlogin" />
          <Route element={<Demosignup />} path="demosignup" />
          <Route element={<Demologin />} path="demologin" />
          <Route element={<BrowseSlot />} path="browseslot" />
        </Route>

        <Route
          element={
            <OwnerAuthorisor>
              <Owner />
            </OwnerAuthorisor>
          }
          path="/owner"
        >
          <Route element={<ManagePlan />} path="manageplan" />
          <Route element={<PricingPlan />} path="pricingplan" />
          <Route element={<ManageSlot />} path="manageslot" />
          <Route element={<Manageprofile />} path="manageprofile" />
        </Route>

        <Route
          element={
            <Authorisor>
              <User />
            </Authorisor>
          }
          path="user"
        >
          <Route element={<SlotDetails />} path="slotdetails" />
          <Route element={<BookSlot />} path="bookslot/:slotid" />
        </Route>

        <Route element={<Navigate to="/main/home" />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
