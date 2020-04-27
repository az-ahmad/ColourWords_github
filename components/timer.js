import React, { useState, useEffect } from "react";
import { Text, Alert } from "react-native";

const Timer = ({ navigation, setPlaying, isPlaying }) => {
  console.log(navigation)
  // The timer
  const [timeState, setTimeState] = useState({
    timer: 10,
  });

  // Condition check so component can be unmounted properly
  let isCancelled = false;

  useEffect(() => {
    // Timer function and lost conidition
    const interval = setInterval(() => {
      isPlaying && !isCancelled && setTimeState({ timer: timeState.timer - 1 });
    }, 1000);
    if (timeState.timer <= 0) {
      clearInterval(interval);
      Alert.alert(
        "Game Over",
        "The time has run out",
        [{ text: "OK", onPress: () => navigation.navigate("Home") }],
        { cancelable: false }
      );
      setPlaying(false);
    }
    // unmount component properly
    return () => (isCancelled = true);
  });

  return (
    <React.Fragment>
      <Text>Timer : {timeState.timer}</Text>
    </React.Fragment>
  );
};

export default Timer;
