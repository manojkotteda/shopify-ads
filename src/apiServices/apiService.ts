import axios from "axios";
import { auth } from "../config/firebase/firebase"; // Import Firebase auth

export const saveProduct = async (userId: string, url: string, image: string) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("User not authenticated");

    const token = await user.getIdToken(); // Await the token retrieval

    console.log("token: "+ token)

    const requestData = { user_id: userId, url, image };

    const response = await axios.post("http://localhost:8000/api/v1/save-product", requestData, {
      headers: { Authorization: `Bearer ${token}` }, // Send valid token
    });

    return response.data;
  } catch (error) {
    console.error("Error saving product:", error);
    throw error;
  }
};
