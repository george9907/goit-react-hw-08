import { Route, Routes } from "react-router-dom";
import { useState, lazy, Suspense, useEffect } from "react";
import Layout from "../Layout/Layout.jsx";
import Loader from "../Loader/Loader.jsx";
import RestrictedRoute from "../RestrictedRoute.jsx";
import PrivateRoute from "../PrivateRoute.jsx";
// import css from "./App.module.css";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage.jsx")
);
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage.jsx")
);
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage.jsx")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage.jsx"));

import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations.js";
import { selectIsRefreshing } from "../../redux/auth/selectors.js";

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch])
  
  return isRefreshing ? (<Loader />) :
    (
    <Layout>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RestrictedRoute component={<RegistrationPage/>} redirectTo="/" />} />
        <Route path="/login" element={<RestrictedRoute component={<LoginPage/>} redirectTo="/contacts" />} />
        <Route path="/contacts" element={<PrivateRoute component={<ContactsPage/>} redirectTo="/login" />} />
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
      </Suspense>
    </Layout>
  ) 
}