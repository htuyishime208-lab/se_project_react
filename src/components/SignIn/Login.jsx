import React from "react";
import { useForm } from "react-hook-form";

import ModalWithForm from "../ModalWithForm/ModalWithForm";



// Mock authentication function
const mockLogin = async (email, password) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Example: Accept only a specific test account
  if (email === "test@example.com" && password === "password123") {
    return { success: true, token: "fake-jwt-token" };
  } else {
    throw new Error("Invalid email or password");
  }
};

export default function LoginForm({isOpen, onClose}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await mockLogin(data.email, data.password);
      alert(`Login successful! Token: ${result.token}`);
    } catch (err) {
      setError("apiError", { message: err.message });
    }
  };

  return (
    <ModalWithForm  
      isOpen={isOpen}
      title={"Login"}
      buttontext={"Login"}
      handleSubmit={handleSubmit}
      onClose={onClose}
       >
    <div style={styles.container}>
      <h2>User Login</h2>
      <fieldset  style={styles.form}>
        {/* Email Field */}
        <label>Email:</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && <p style={styles.error}>{errors.email.message}</p>}

        {/* Password Field */}
        <label>Password:</label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        {errors.password && (
          <p style={styles.error}>{errors.password.message}</p>
        )}

        {/* API Error */}
        {errors.apiError && (
          <p style={styles.error}>{errors.apiError.message}</p>
        )}

        {/* Submit Button */}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </fieldset>
    </div>
  

</ModalWithForm>

);
}
// Inline styles for simplicity
const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  error: {
    color: "red",
    fontSize: "0.9em",
  },
};
