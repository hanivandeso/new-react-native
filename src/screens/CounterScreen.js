import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  // state === { count: number}
  // action === { type: 'increment' || 'decrement', payload: 1}
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 2 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "increment" });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "decrement" });
        }}
      />
      <Text>Current Count: {state.count}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default CounterScreen;
