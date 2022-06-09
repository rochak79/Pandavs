import { InputLabel, TextField, MenuItem, Grid } from "@mui/material";
import axios from "axios";
import React from "react";

const colorMap = [
  { value: "red", label: "Red" },
  { value: "white", label: "White" },
  { value: "pink", label: "Pink" },
  { value: "grey", label: "Grey" },
  { value: "black", label: "Black" },
  { value: "purple", label: "Purple" },
];

const brandMap = [
  { value: "canon", label: "Canon" },
  { value: "apple", label: "Apple" },
  { value: "samsung", label: "Samsung" },
  { value: "sony", label: "Sony" },
  { value: "lg", label: "LG" },
  { value: "nokia", label: "Nokia" },
  { value: "oneplus", label: "OnePlus" },
];

const ProductFormItem = ({ formik, setImage }) => {
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        proxy: {
          port: 3000,
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);

      setImage(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Grid container spacing={2}>
        {/* yo */}
        <Grid item xs={6}>
          <TextField
            margin="normal"
            required
            select
            fullWidth
            name="color"
            label="Color"
            id="color"
            value={formik.values.color}
            onChange={formik.handleChange}
            error={formik.touched.color && Boolean(formik.errors.color)}
            helperText={formik.touched.color && formik.errors.color}
            autoComplete="current-color"
          >
            {colorMap.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        {/* yo samma */}
      </Grid>
    </div>
  );
};

export default ProductFormItem;
