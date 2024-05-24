import { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "Increase":
      return { ...state, count: state.count + 1 };

    default:
      break;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div> {state.count}</div>
      <button onClick={() => dispatch({ type: "Increase" })}>Increase</button>
      <button onClick={() => dispatch("Increase By Amount")}>
        Increase By Amount
      </button>
      <button onClick={() => dispatch("Reset")}>Reset</button>
      <button onClick={() => dispatch("Decrease")}>Decrease</button>
    </>
  );
}

export default App;
