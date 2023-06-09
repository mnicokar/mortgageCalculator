import { Stack, Typography } from "@mui/material";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({
  homeValue,
  downPayment,
  loanAmount,
  loanTerm,
  interestRate,
}) => {
  //destructure the data

  const totalLoanMonths = loanTerm * 12;

  const interestPerMonth = interestRate / 100 / 12;

  const monthlyPayment =
    (loanAmount *
      interestPerMonth *
      (1 + interestPerMonth) ** totalLoanMonths) /
    ((1 + interestPerMonth) ** totalLoanMonths - 1);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;

  const pieChartData = {
    labels: ["Principle", "Interest"],
    datasets: [
      {
        label: "Ratio of Principle and Interest",
        data: [homeValue, totalInterestGenerated],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Stack gap={3}>
      <Typography textAlign="center" variant="h5">
        {" "}
        Monthly Payment: {formatter.format(monthlyPayment)}{" "}
      </Typography>
      <Typography textAlign="center" variant="h5">
        Overall Cost: {formatter.format(homeValue + totalInterestGenerated)}
      </Typography>
      <Stack direction="row" justifyContent="center">
        <div>
          <Pie data={pieChartData} />
        </div>
      </Stack>
      
    </Stack>
  );
  
};

export default Result;
