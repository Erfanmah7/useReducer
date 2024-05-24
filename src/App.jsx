import { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "Increase":
      return { ...state, count: state.count + 1 };
    case "IncreaseByAmount":
      return { ...state, count: state.count + action.payload };
    case "Reset":
      return { ...state, count: 0 };
    case "Decrease":
      return { ...state, count: state.count - 1 };
    default:
      throw new Error("Invalid Action");
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [state2, dispatch2] = useReducer(reducer, initialState);

  return (
    <>
      <div> {state.count}</div>
      <div>
        {" "}
        <button onClick={() => dispatch({ type: "Increase" })}>Increase</button>
        <button
          onClick={() => dispatch({ type: "IncreaseByAmount", payload: 10 })}
        >
          Increase By Amount
        </button>
        <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
        <button onClick={() => dispatch({ type: "Decrease" })}>Decrease</button>
      </div>
      <hr />
      <div> {state2.count}</div>
      <div>
        {" "}
        <button onClick={() => dispatch2({ type: "Increase" })}>
          Increase
        </button>
        <button
          onClick={() => dispatch2({ type: "IncreaseByAmount", payload: 10 })}
        >
          Increase By Amount
        </button>
        <button onClick={() => dispatch2({ type: "Reset" })}>Reset</button>
        <button onClick={() => dispatch2({ type: "Decrease" })}>
          Decrease
        </button>
      </div>
    </>
  );
}

export default App;
