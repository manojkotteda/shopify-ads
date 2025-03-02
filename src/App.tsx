import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import SignIn from "./sign-in/SignIn";
import ShopifyAdUploader from "./ShopifyAdUploader";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/upload" element={<ShopifyAdUploader />} />
      </Routes>
    </Router>
  );
}