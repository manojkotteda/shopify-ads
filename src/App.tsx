import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./sign-in/SignIn";
import ShopifyAdUploader from "./ShopifyAdUploader";
import { JSX } from "react";

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const userToken = sessionStorage.getItem("userToken");
  return userToken ? children : <Navigate to="/" replace />;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/upload" element={<ProtectedRoute><ShopifyAdUploader /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}