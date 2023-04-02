import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const TenureSelect = ({data,setData}) => {
  

  const handleChange = (event) => {
    setData({
      ...data,
      loanTerm: event.target.value}
      );
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Tenure</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={data.loanTerm}
        label="Tenure"
        onChange={handleChange}
      >
        {Array.from({ length: 6 }, (_, i) => (i + 1) * 5).map((value) => (
          <MenuItem value={value}>{value} years</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TenureSelect;