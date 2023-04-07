import React, { Fragment } from "react";
import Slider from "@mui/material/Slider";
import { Stack, Typography } from "@mui/material";
const SliderComponent = ({
  defaultValue,
  min,
  max,
  onChange,
  value,
  label,
  unit,
}) => {

  return (
    <Stack my={1.4}>
      <Stack gap={1} direction={"column"}>
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="h5">
          {unit} {value.toLocaleString()}
        </Typography>
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
