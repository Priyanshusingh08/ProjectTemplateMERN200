import "./App.css";
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
import BookSlot from "./components/main/bookSlot";
import Manageprofile from "./components/owner/manageprofile";
import BrowseSlot from "./components/user/browseSlot";
import SlotDetails from "./components/user/slotDetails";
import Home from "./components/main/home";
import PricingPlan from "./components/main/pricingPlan";

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
          <Route element={<BookSlot />} path="bookslot" />
          <Route element={<Home />} path="home" />
          <Route element={<OwnerSignup />} path="ownersignup" />
          <Route element={<OwnerLogin />} path="ownerlogin" />
        </Route>

        <Route element={<Owner />} path="/owner">
          <Route element={<ManagePlan />} path="manageplan" />
          <Route element={<PricingPlan />} path="pricingplan" />
          <Route element={<ManageSlot />} path="manageslot" />
          <Route element={<Manageprofile />} path="manageprofile" />
        </Route>

        <Route element={<User />} path="user">
          <Route element={<BrowseSlot />} path="browseslot" />
          <Route element={<SlotDetails />} path="slotdetails" />
        </Route>

        <Route element={<Navigate to="/main/home" />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
