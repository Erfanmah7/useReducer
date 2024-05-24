import React, { useEffect, useReducer } from "react";
const initialState = { isLoading: true, data: [], error: "" };
const reducer = (state, action) => {
  //   console.log({ state, action });
  switch (action.type) {
    case "SUCCESS":
      return { isLoading: false, data: action.payload, error: "" };
    case "FAILED":
      return { isLoading: false, data: [], error: action.payload };
  }
};
function HttpRes() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const json = await res.json();
        // console.log(json);
        dispatch({ type: "SUCCESS", payload: json });
      } catch (error) {
        dispatch({ type: "FAILED", payload: error.message });
      }
    };

    getData();
  }, []);

  return (
    <div>
      {state.isLoading && <p>Loading...</p>}
      {state.data.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
        </div>
      ))}
      {!!state.error && <p>Failed to Fetch</p>}
    </div>
  );
}

export default HttpRes;
