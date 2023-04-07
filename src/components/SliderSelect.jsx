import React, { useCallback  } from "react";
import SliderComponent from "./common/SliderComponent";
import throttle from "lodash.throttle";
/*
        <SliderComponent min = {100} max = {200} defaultValue = {150}/>
        <SliderComponent min = {0} max = {10} defaultValue = {3}/>
*/
const bank_limit = 300000;


const SliderSelect = ({
  homeValue,
  setHomeValue,
  setDownPayment,
  setLoanAmount,
}) => {
  const handleHomeValueChange = useCallback(
    throttle((value) => {
      setHomeValue(value);
      setDownPayment(value * 0.2);
      setLoanAmount(value * 0.8);
    }),
    [setDownPayment, setHomeValue, setLoanAmount]
  );

  
  return (
    <>
      <SliderComponent
        min={0}
        max={bank_limit}
        defaultValue={homeValue}
        label={"Home Value"}
        unit="$"
        value={homeValue}
        onChange={(event, value) => handleHomeValueChange(value)}
      />
    </>
  );
};

export default SliderSelect;
