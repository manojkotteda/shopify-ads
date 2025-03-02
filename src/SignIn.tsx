import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
  FormControl,
  FormLabel,
} from "@mui/material";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // Simulate authentication (replace with real authentication logic)
    console.log("Authenticated:", { email, password });

    // Redirect to the upload page
    navigate("/upload");
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Card elevation={3} sx={{ padding: 3, borderRadius: 3, maxWidth: 400, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Sign In
        </Typography>
        <CardContent>
          <form onSubmit={handleSubmit} noValidate>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <FormLabel>Email</FormLabel>
              <TextField
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
              />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <FormLabel>Password</FormLabel>
              <TextField
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••"
                required
              />
            </FormControl>
            {error && <Typography color="error">{error}</Typography>}
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
