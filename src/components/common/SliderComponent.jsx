import React, { Fragment } from "react";
import Slider from "@mui/material/Slider";
import { Stack, Typography, Input } from "@mui/material";
const SliderComponent = ({
  defaultValue,
  min,
  max,
  onChange,
  value,
  label,
  unit,
}) => {
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const numericValue = Number(inputValue.replace(/[^\d.-]/g, ""));
    onChange(event, numericValue);
  };
  
  return (
    <Stack my={1.4}>
      <Stack gap={0.02} direction={"column"}>
        <Typography variant="subtitle2">{label}</Typography>
        
        <Input 
          
          value={`${unit} ${value.toLocaleString()}`}
          
          onChange={handleInputChange}
          inputProps={{
            step: 100,
            min: min,
            max: max,
            "aria-labelledby": "input-slider",
          }}
          sx={{ fontSize: "24px" }}
        />
      </Stack>

      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={onChange}
        value={value}
      />

      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography variant="caption" color="text.secondary">
          {unit}
          {min}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {unit}
          {max.toLocaleString()}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SliderComponent;
