import { Container, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";
import { useState } from "react";

function App() {
  //name, function

  const [homeValue, setHomeValue] = useState(3000);
  const [downPayment, setDownPayment] = useState(homeValue * 0.2);
  const [loanAmount, setLoanAmount] = useState(homeValue * 0.8);
  const [loanTerm, setLoanTerm] = useState(5);
  const [interestRate, setInterestRate] = useState(5);

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <SliderSelect
              homeValue={homeValue}
              setHomeValue={setHomeValue}
              downPayment={downPayment}
              setDownPayment={setDownPayment}
              loanAmount={loanAmount}
              setLoanAmount={setLoanAmount}
              loanTerm={loanTerm}
              setLoanTerm={setLoanTerm}
              interestRate={interestRate}
              setInterestRate={setInterestRate}
            />
            <TenureSelect
              homeValue={homeValue}
              setHomeValue={setHomeValue}
              downPayment={downPayment}
              setDownPayment={setDownPayment}
              loanAmount={loanAmount}
              setLoanAmount={setLoanAmount}
              loanTerm={loanTerm}
              setLoanTerm={setLoanTerm}
              interestRate={interestRate}
              setInterestRate={setInterestRate}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Result
              homeValue={homeValue}
              downPayment={downPayment}
              loanAmount={loanAmount}
              loanTerm={loanTerm}
              interestRate={interestRate}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
