import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Settings from "./components/Settings";
import UserDetail from "./components/UserDetails";
import UserList from "./components/UserList";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Weather from "./components/Weather";
import GithubProfileFinder from "./components/GithubProfileFinder";

const Profile = lazy(() => import("./components/Profile"));
const Orders = lazy(() => import("./components/Orders"));

const ProtectedProfile = ProtectedRoute(Profile);
const ProtectedOrders = ProtectedRoute(Orders);
const ProtectedSettings = ProtectedRoute(Settings);
const ProtectedUserDetail = ProtectedRoute(UserDetail);
const ProtectedUserList = ProtectedRoute(UserList);
const ProtectedGihtubFinder = ProtectedRoute(GithubProfileFinder);

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navbar />}>
          <Route path="profile" element={<ProtectedProfile />} />
          <Route path="orders" element={<ProtectedOrders />} />
          <Route path="settings" element={<ProtectedSettings />} />
          <Route path="user/:id" element={<ProtectedUserDetail />} />
          <Route path="users" element={<ProtectedUserList />} />
          <Route path="weather" element={<Weather />} />
          <Route
            path="github-profile-finder"
            element={<ProtectedGihtubFinder />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
