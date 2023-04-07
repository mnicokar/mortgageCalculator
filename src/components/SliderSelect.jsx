import React from "react";
import SliderComponent from "./common/SliderComponent";

const bankLimit = 1000000;

const SliderSelect = ({
  homeValue,
  setHomeValue,
  downPayment,
  setDownPayment,
  loanAmount,
  setLoanAmount,
  interestRate,
  setInterestRate,
}) => {
  const handleHomeValueChange = (value) => {
    setHomeValue(value);
    setDownPayment(value * 0.2);
    setLoanAmount(value * 0.8);
  };

  return (
    <>
    <div style={{ marginTop: 16 }}>
        
      
      </div>
      <SliderComponent
        min={0}
        max={bankLimit}
        defaultValue={homeValue}
        label={"Home Value"}
        unit="$"
        value={homeValue}
        onChange={(event, value) => handleHomeValueChange(value)}
      />

      

      <SliderComponent
        onChange={(e, value) =>
          setDownPayment(value, setLoanAmount((homeValue - value)))
        }
        defaultValue={downPayment}
        min={0}
        max={homeValue}
        steps={100}
        unit="$"
        amount={downPayment}
        label="Down Payment"
        value={downPayment}
      />

      <SliderComponent
        onChange={(e, value) =>
          setLoanAmount(value, setDownPayment((homeValue - value)))
        }
        defaultValue={loanAmount}
        min={0}
        max={homeValue}
        steps={100}
        unit="$"
        amount={loanAmount}
        label="Loan Amount"
        value={loanAmount}
      />

      <SliderComponent
        onChange={(e, value) => setInterestRate(value.toFixed(0))}
        defaultValue={interestRate}
        min={2}
        max={18}
        steps={0.5}
        unit="%"
        amount={interestRate}
        label="Interest Rate"
        value={interestRate}
      />
    </>
  );
};

export default SliderSelect;
