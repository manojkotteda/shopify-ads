import { useState } from "react";
import { TextField, Button, Card, CardContent, Typography } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { motion } from "framer-motion";

interface ImageFile {
  name: string;
  type: string;
}

export default function ShopifyAdUploader() {
  const [productUrl, setProductUrl] = useState<string>("");
  const [image, setImage] = useState<ImageFile | null>(null);
  const [error, setError] = useState<string>("");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      setError("");
    } else {
      setError("Please upload a valid image file.");
    }
  };

  const handleSubmit = () => {
    if (!productUrl.trim() || !image) {
      setError("Both the Shopify URL and an image are required.");
      return;
    }
    setError("");
    console.log("Submitting:", { productUrl, image });
    // Further processing logic
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <Card elevation={3} sx={{ padding: 3, borderRadius: 3, textAlign: "center" }}>
          <Typography variant="h5" gutterBottom>
            Upload Shopify Product
          </Typography>
          <CardContent>
            <TextField
              fullWidth
              label="Shopify Product URL"
              type="url"
              variant="outlined"
              value={productUrl}
              onChange={(e) => setProductUrl(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Button
              component="label"
              variant="outlined"
              startIcon={<CloudUpload />}
              fullWidth
              sx={{ mb: 2 }}
            >
              Upload Image
              <input type="file" accept="image/*" hidden onChange={handleImageUpload} />
            </Button>
            {image && <Typography variant="body2">Uploaded: {image.name}</Typography>}
            {error && <Typography color="error" variant="body2">{error}</Typography>}
            <Button
              onClick={handleSubmit}
              variant="contained"
              color="primary"
              fullWidth
            >
              Submit
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}