import { Animated } from "react-native";

export const createAnimation = (animation, toValue, duration, easing, delay = 0, useNativeDriver = true) => {
    return Animated.timing(animation, {
      toValue,
      duration,
      easing,
      delay,
      useNativeDriver
    });
};

export const createInterpolate = (animation, input, output) => {
    return animation.interpolate({
        inputRange: input,
        outputRange: output
    })
};  
    