import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store";
import { Provider } from "react-redux";
const App = lazy(() => import("./App"));
const HomeScreen = lazy(() => import("./screens/HomeScreen"));
const WikiScreen = lazy(() => import("./screens/WikiScreen"));
const LoginScreen = lazy(() => import("./screens/LoginScreen"));
const RegisterScreen = lazy(() => import("./screens/RegisterScreen"));
const ProfileScreen = lazy(() => import("./screens/ProfileScreen"));
const DashboardScreen = lazy(() => import("./screens/DashboardScreen"));
const ContactScreen = lazy(() => import("./screens/ContactScreen"));
const KatalogScreen = lazy(() => import("./screens/KatalogScreen"));
const ListSupportScreen = lazy(() => import("./screens/SupportScreen"));
const ListUserScreen = lazy(() => import("./screens/ListUserScreen"));
const ListAddressScreen = lazy(() => import("./screens/ListAddressScreen"));
const ListCategoryScreen = lazy(() => import("./screens/ListCategoryScreen"));
const ListArticleScreen = lazy(() => import("./screens/ListArticleScreen"));
const ListProductScreen = lazy(() => import("./screens/ListProductScreen"));
const ListRiddleScreen = lazy(() => import("./screens/ListRiddleScreen"));
const ListOrderScreen = lazy(() => import("./screens/ListOrderScreen"));
const ListMyOrderScreen = lazy(() => import("./screens/ListMyOrderScreen"));
const ProductDetailScreen = lazy(() => import("./screens/ProductDetailScreen"));
const EditRiddlePage = lazy(() => import("./components/admin/riddle/EditRiddlePage"));
const RiddleScreen = lazy(() => import("./screens/RiddleScreen"));
const RiddleGameScreen = lazy(() => import("./screens/RiddleGameScreen"));
const CartScreen = lazy(() => import("./screens/CartScreen"));
const PrivateRoute = lazy(() => import("./components/PrivateRoute"));
// const AdminRoute = lazy(() => import("./components/AdminRoute"));
const OwnerRoute = lazy(() => import("./components/OwnerRoute"));
const ArticleScreen = lazy(() => import("./screens/ArticleScreen"));
const DetailArticle = lazy(() => import("./screens/ArticleDetail"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<div>Loading...</div>}>
            <App />
          </Suspense>
        </ErrorBoundary>
      }>
      <Route
        index
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <HomeScreen />
          </Suspense>
        }
      />
      <Route
        path="wiki"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <WikiScreen />
          </Suspense>
        }
      />
      <Route
        path="login"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LoginScreen />
          </Suspense>
        }
      />
      <Route
        path="register"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <RegisterScreen />
          </Suspense>
        }
      />
      <Route
        path="contact"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <ContactScreen />
          </Suspense>
        }
      />
      <Route
        path="katalog"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <KatalogScreen />
          </Suspense>
        }
      />
      <Route
        path="/article"
        element={<ArticleScreen />}
      />
      <Route
        path="/article/:id"
        element={<DetailArticle />}
      />
      <Route
        path="/product/:id"
        element={<ProductDetailScreen />}
      />
      <Route
        path="riddle"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <RiddleScreen />
          </Suspense>
        }
      />
      <Route
        path="riddle/:id"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <RiddleGameScreen />
          </Suspense>
        }
      />
      <Route
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <PrivateRoute />
          </Suspense>
        }>
        <Route
          path="dashboard"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <DashboardScreen />
            </Suspense>
          }
        />
        <Route
          path="support"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ListSupportScreen />
            </Suspense>
          }
        />
        <Route
          path="listcategories"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ListCategoryScreen />
            </Suspense>
          }
        />
        <Route
          path="listarticles"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ListArticleScreen />
            </Suspense>
          }
        />
        <Route
          path="listproducts"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ListProductScreen />
            </Suspense>
          }
        />
        <Route
          path="listriddles"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ListRiddleScreen />
            </Suspense>
          }
        />
        <Route
          path="editriddle/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <EditRiddlePage />
            </Suspense>
          }
        />
        <Route
          path="listorders"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ListOrderScreen />
            </Suspense>
          }
        />
        <Route
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <OwnerRoute />
            </Suspense>
          }>
          <Route
            path="listallusers"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ListUserScreen />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <CartScreen />
            </Suspense>
          }
        />
        <Route
          path="profile"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ProfileScreen />
            </Suspense>
          }
        />
        <Route
          path="addressbook"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ListAddressScreen />
            </Suspense>
          }
        />
        <Route
          path="myorders"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ListMyOrderScreen />
            </Suspense>
          }
        />
      </Route>
    </Route>
  )
);

const AppWrapper = () => (
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);

export default AppWrapper;

ReactDOM.createRoot(document.getElementById("root")).render(<AppWrapper />);
