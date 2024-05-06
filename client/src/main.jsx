import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";
import ProfileScreen from "./screens/ProfileScreen.jsx";
import DashboardScreen from "./screens/DashboardScreen.jsx";
import ListUserScreen from "./screens/ListUserScreen.jsx";
import ContactScreen from "./screens/ContactScreen.jsx";
import ListAddressScreen from "./screens/ListAddressScreen.jsx";
import ListSupportScreen from "./screens/SupportScreen.jsx";
import ListCategoryScreen from "./screens/ListCategoryScreen.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import AdminRoute from "./components/AdminRoute.jsx";
import OwnerRoute from "./components/OwnerRoute.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}>
      <Route
        index={true}
        path="/"
        element={<HomeScreen />}
      />
      <Route
        path="/login"
        element={<LoginScreen />}
      />
      <Route
        path="/register"
        element={<RegisterScreen />}
      />
      <Route
        path="/contact"
        element={<ContactScreen />}
      />
      <Route
        path=""
        element={<PrivateRoute />}>
        <Route
          path=""
          element={<AdminRoute />}>
          <Route
            path="/dashboard"
            element={<DashboardScreen />}
          />
          <Route
            path="/support"
            element={<ListSupportScreen />}
          />
          <Route
            path="/listcategories"
            element={<ListCategoryScreen />}
          />
          <Route
            path=""
            element={<OwnerRoute />}>
            <Route
              path="/listallusers"
              element={<ListUserScreen />}
            />
          </Route>
        </Route>
        <Route
          path="/profile"
          element={<ProfileScreen />}
        />
        <Route
          path="/addressbook"
          element={<ListAddressScreen />}
        />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
