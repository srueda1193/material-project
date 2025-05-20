import React, { useState } from "react";
import { AuthLayout } from "../component/AuthLayout";
import { Button, Grid, Link, TextField } from "@mui/material";
import { Google } from "@mui/icons-material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerUser } from "../services/AuthServices";


type RegisterFormData = {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
};


export const RegisterPage = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<RegisterFormData>();

  const navigate = useNavigate();

  const onSubmit = async (data: RegisterFormData) => {
    if (data.password !== data.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      const user = await registerUser(
        data.email,
        data.password,
        data.firstName,
        data.lastName
      );
      console.log("Usuario registrado:", user);
      navigate('/auth/login');
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <AuthLayout description="Register Page">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid sx={{ margin: 2 }}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            {...register("email", {
              required: "El correo es obligatorio",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Correo no válido",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Grid>

        <Grid sx={{ margin: 2 }}>
          <TextField
            label="Password"
            type="password"
            fullWidth
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: {
                value: 6,
                message: "Mínimo 6 caracteres",
              },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </Grid>

        <Grid sx={{ margin: 2 }}>
          <TextField
            label="Confirmar Password"
            type="password"
            fullWidth
            {...register("confirmPassword", {
              required: "Confirma tu contraseña",
              validate: (value) =>
                value === watch("password") || "Las contraseñas no coinciden",
            })}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
          />
        </Grid>

        <Grid sx={{ margin: 2 }}>
          <TextField
            label="Nombre"
            fullWidth
            {...register("firstName", { required: "Nombre requerido" })}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />
        </Grid>

        <Grid sx={{ margin: 2 }}>
          <TextField
            label="Apellido"
            fullWidth
            {...register("lastName", { required: "Apellido requerido" })}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid size={{xs:12 ,sm:6}}>
            <Button type="submit" variant="contained" fullWidth>
              Registrarse
            </Button>
          </Grid>

          <Grid size={{xs:12 ,sm:6}}>
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
