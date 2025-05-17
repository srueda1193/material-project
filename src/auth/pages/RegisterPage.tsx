import React from "react";
import { AuthLayout } from "../component/AuthLayout";
import { Button, Grid, Link, TextField } from "@mui/material";
import { Google } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <AuthLayout description="Register Page">
      <form>
        <Grid sx={{ margin: 2 }}>
          <TextField
            id="outlined-basic"
            label="Email"
            type="email"
            variant="outlined"
            placeholder="email@mail.com"
            fullWidth
          />
        </Grid>

        <Grid sx={{ margin: 2 }}>
          <TextField
            id="outlined-basic"
            label="Password"
            type="password"
            variant="outlined"
            placeholder="password"
            fullWidth
          />
        </Grid>

        <Grid sx={{ margin: 2 }}>
          <TextField
            id="outlined-basic"
            label="Confirm Password"
            type="password"
            variant="outlined"
            placeholder="password"
            fullWidth
          />
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid size={{ sm: 6, xs: 12 }}>
            <Button variant="contained" fullWidth>
              Login
            </Button>
          </Grid>

          <Grid size={{ sm: 6, xs: 12 }}>
            <Button variant="contained" fullWidth startIcon={<Google />}>
              Google
            </Button>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ya tienes cuenta? Log In
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
