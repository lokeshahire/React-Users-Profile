import "./App.css";
import data from "./db.json";
import { useState } from "react";
import UserDetails from "./components/UserDetails";

function App() {
  const [state, setState] = useState(data);
  const handleSort = (type) => {
    if (type === "asc") {
      const newArr = state.sort((a, b) => {
        if (a.first_name > b.first_name) {
          return 1;
        } else if (a.first_name < b.first_name) {
          return -1;
        } else {
          return 0;
        }
      });

      setState([...newArr]);
    } else {
      const newArr = state.sort((a, b) => {
        if (a.first_name > b.first_name) {
          return -1;
        } else if (a.first_name < b.first_name) {
          return 1;
        } else {
          return 0;
        }
      });
      setState([...newArr]);
    }
  };

  return (
    <div className="App" data-testid="app">
      <button onClick={() => handleSort("asc")} data-testid="sort-asc-btn">
        Sort by Asc
      </button>
      <button onClick={() => handleSort("desc")} data-testid="sort-desc-btn">
        Sort by Desc
      </button>
      {/*  map through the users data and pass props to the Userdetails component */}
      {state?.map((el) => (
        <UserDetails key={el.id} {...el} />
      ))}
    </div>
  );
}

export default App;
