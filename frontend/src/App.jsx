import { useState } from "react";

import Button from "./components/Button";
import Input from "./components/Input";
import List from "./components/List";

import "./App.css";

function App() {
  const [concurrency, setConcurrency] = useState(1);
  const [result, setResult] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const startFetching = async () => {
    if (concurrency < 1 || concurrency > 100) {
      return;
    }

    setIsFetching(true);
    setResult([]);

    const requestsPerBatch = concurrency;
    const delayBetweenBatches = 2000;

    for (let i = 1; i <= 1000; i += requestsPerBatch) {
      const batchPromises = Array.from(
        { length: requestsPerBatch },
        (_, index) => {
          const requestIndex = i + index;

          return new Promise((resolve) => {
            fetch(`http://localhost:3000/api?index=${requestIndex}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((response) => response.json())
              .then((data) => resolve(data.index))
              .catch((error) => {
                console.error("Error:", error);
                resolve(null);
              });
          });
        }
      );

      const batchResults = await Promise.all(batchPromises);
      const filteredResults = batchResults.filter((result) => result !== null);
      setResult((prevResult) => [...prevResult, ...filteredResults]);

      await new Promise((resolve) => setTimeout(resolve, delayBetweenBatches));
    }

    setIsFetching(false);
  };

  return (
    <>
      <h1>Requests App</h1>
      <div>
        <Input
          min="0"
          max="100"
          type="number"
          label="Concurrency"
          id="Concurrency"
          value={concurrency}
          onChange={(e) => setConcurrency(parseInt(e.target.value))}
        />
        <Button onClick={startFetching} disabled={isFetching}>
          Start
        </Button>

        <List list={result} />
      </div>
    </>
  );
}

export default App;
