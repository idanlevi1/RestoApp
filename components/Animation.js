import { Animated } from "react-native";

export const createAnimation = (value, duration, easing, delay = 0, useNativeDriver = true) => {
    return Animated.timing(value, {
      toValue: 1,
      duration,
      easing,
      delay,
      useNativeDriver
    });
};

export const createInterpolate = (animation, outX, outY) => {
    return animation.interpolate({
        inputRange: [0, 1],
        outputRange: [outX, outY]
    })
};  
    