import { useState, useEffect } from "react";
import { TextField, Button, Card, CardContent, Typography, Snackbar, Alert, CssBaseline, Box, FormControl, FormLabel, Stack } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { saveProduct } from "../src/apiServices/apiService";
import AppTheme from "./shared-theme/AppTheme";
import ColorModeSelect from "./shared-theme/ColorModeSelect";
import { SitemarkIcon } from "./sign-in/components/CustomIcons";
import { useNavigate } from "react-router-dom";

const CardContainer = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "450px",
  },
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

const Container = styled(Stack)(({ theme }) => ({
  height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
  minHeight: "100%",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
}));

interface ImageFile {
  name: string;
  type: string;
  dataUrl?: string;
}

export default function ShopifyAdUploader() {
  const [productUrl, setProductUrl] = useState<string>("");
  const [image, setImage] = useState<ImageFile | null>(null);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = sessionStorage.getItem("userToken");
    if (!userToken) {
      navigate("/");
    }
  }, [navigate]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage({ name: file.name, type: file.type, dataUrl: reader.result as string });
      };
      reader.readAsDataURL(file);
      setError("");
    } else {
      setError("Please upload a valid image file.");
    }
  };

  const handleSubmit = async () => {
    if (!productUrl.trim() || !image || !image.dataUrl) {
      setError("Both the Shopify URL and an image are required.");
      return;
    }
    setError("");

    try {
      const response = await saveProduct("12345", productUrl, image.dataUrl);
      console.log("Response:", response);
      setSuccess(true);
    } catch (error) {
      console.error("Error submitting product:", error);
      setError("Failed to save product.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("userToken");
    navigate("/");
  };

  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <Container direction="column" justifyContent="space-between">
        <ColorModeSelect sx={{ position: "fixed", top: "1rem", right: "1rem" }} />
        <Button onClick={handleLogout} variant="outlined" color="secondary" sx={{ position: "fixed", top: "1rem", left: "1rem" }}>
          Logout
        </Button>
        <CardContainer variant="outlined">
          <SitemarkIcon />
          <Typography component="h1" variant="h4" sx={{ fontSize: "clamp(2rem, 10vw, 2.15rem)" }}>
            Add Generator
          </Typography>
          <CardContent>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <FormLabel>Shopify Product URL</FormLabel>
              <TextField
                type="url"
                variant="outlined"
                value={productUrl}
                onChange={(e) => setProductUrl(e.target.value)}
                required
                placeholder="Enter Shopify Product URL"
              />
            </FormControl>
            <Button component="label" variant="outlined" startIcon={<CloudUpload />} fullWidth sx={{ mb: 2 }}>
              Upload Image
              <input type="file" accept="image/*" hidden onChange={handleImageUpload} />
            </Button>
            {image && <Typography variant="body2">Uploaded: {image.name}</Typography>}
            {error && <Typography color="error" variant="body2">{error}</Typography>}
            <Button onClick={handleSubmit} variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </CardContent>
        </CardContainer>
      </Container>
      <Snackbar open={success} autoHideDuration={4000} onClose={() => setSuccess(false)}>
        <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: "100%" }}>
          Product uploaded successfully!
        </Alert>
      </Snackbar>
    </AppTheme>
  );
}