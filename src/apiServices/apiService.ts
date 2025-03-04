import axios from "axios";

export const saveProduct = async (userId: string, url: string, image: string) => {
  const requestData = {
    user_id: userId,
    url,
    image,
  };

  try {
    const response = await axios.post("http://localhost:8000/api/v1/save-product", requestData);
    return response.data;
  } catch (error) {
    console.error("Error saving product:", error);
    throw error;
  }
};
