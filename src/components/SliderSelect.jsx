import React, { Fragment } from "react";
import SliderComponent from "./common/SliderComponent";

/*
        <SliderComponent min = {100} max = {200} defaultValue = {150}/>
        <SliderComponent min = {0} max = {10} defaultValue = {3}/>
*/
const bank_limit = 10000;
const SliderSelect = ({ data, setData }) => {
  return (
    <>
      <SliderComponent
        min={0}
        max={bank_limit}
        defaultValue={data.homeValue}
        step={100}
        onChange={(e, value) => {
          setData({
            ...data,
            downPayment: value * 0.2,
            loanAmount: value * 0.6,
            homeValue: value,
          });
        }}
        label={"Home Value"}
        unit="$"
        value={data.homeValue}
      />
      <SliderComponent
        min={0}
        max={data.homeValue}
        defaultValue={20}
        step={100}
        onChange={(e, value) => {
          setData({
            ...data,
            loanAmount: (data.homeValue-value),
            downPayment: value,
          });
        }}
        label={"Down Payment"}
        unit="$"
        value={data.downPayment}
      />

      <SliderComponent
        min={0}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        step={100}
        onChange={(e, value) => {
          setData({
            ...data,
            downPayment: (data.homeValue-value),
            loanAmount: value,
          });
        }}
        label={"Loan Amount"}
        unit="$"
        value={data.loanAmount}
      />

      <SliderComponent
        min={0}
        max={18}
        defaultValue={data.interestRate}
        step={1}
        onChange={(e, value) => {
          setData({
            ...data,
            interestRate: value,
          });
        }}
        label={"Interest Rate"}
        unit="%"
        value={data.interestRate}
      />
    </>
  );
};

export default SliderSelect;
