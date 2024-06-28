import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import GoogleIcon from "@mui/icons-material/Google";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { useFormik } from "formik";
import * as yup from "yup";

// Definir el esquema de validación con Yup
const validationSchema = yup.object({
  email: yup.string().email("Ingresa un email válido").required("Email es requerido"),
  password: yup
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("Contraseña es requerida"),
});

// Definir una interfaz para los valores del formulario
interface FormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: FormValues) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main", width: 56, height: 56 }}>
          <SportsSoccerIcon style={{ fontSize: 60 }} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={handleSubmit}>
          {/* Campo de email */}
          <TextField
            sx={{ mt: 2 }}
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          
          {/* Campo de contraseña */}
          <TextField
            sx={{ mt: 2 }}
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
          />
          
          {/* Botón de enviar */}
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
            Ingresar
          </Button>
          
          {/* Botón de ingresar con Google */}
          <Button
            fullWidth
            variant="contained"
            style={{ backgroundColor: "#f44242", color: "white" }}
            sx={{ mt: 2, mb: 2 }}
            startIcon={<GoogleIcon style={{ color: "white" }} />}
          >
            Ingresar con Google
          </Button>
          
          {/* Enlaces adicionales */}
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
