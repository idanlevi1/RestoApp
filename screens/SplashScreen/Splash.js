import React from "react";
import { StyleSheet, Animated, Easing } from "react-native";
import {createAnimation, createInterpolate} from '../../components/Animation'
import { Flamingo } from "../../constants/Colors";
import { MonoText } from "../../components/StyledText";
import { company } from "../../assets/data/company";

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(0.25),
      yValueTitle: new Animated.Value(0),
      xValueSubtitle: new Animated.Value(0),
      spinAnim: new Animated.Value(0.65)
    };
    this.animate();
  }

  animate = () => {
    Animated.parallel([
        createAnimation(this.state.opacity, 500, Easing.ease),
        createAnimation(this.state.spinAnim, 1000, Easing.ease, 500, false),
        createAnimation(this.state.yValueTitle, 1200, Easing.cubic, 300, false),
        createAnimation(this.state.xValueSubtitle, 1000, Easing.linear, 300, false),
      ]).start()
  }

  render() {
    const spinSubtitle = createInterpolate(this.state.spinAnim,'540deg','360deg');
    const spinTite = createInterpolate(this.state.spinAnim,'0deg','355deg');
    const yTitleFall = createInterpolate(this.state.yValueTitle,'-65%','0%');
    const xSubtitleFall = createInterpolate(this.state.xValueSubtitle,'65%','0%')

    return (
      <Animated.View style={[styles.container, { opacity: this.state.opacity }]}>
        <Animated.View style={{top: yTitleFall, transform: [{rotate: spinTite}]}}>
            <MonoText style={styles.title}>{company.name}</MonoText>
        </Animated.View>
        <Animated.View style={{left: xSubtitleFall, transform: [{rotate: spinSubtitle}]}}>
            <MonoText style={styles.subtitle}>{company.subName}</MonoText>
        </Animated.View>
    </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Flamingo.two,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 52,
    color: Flamingo.three,
    fontWeight: "500"
  },
  subtitle: {
    fontSize: 26,
    color: Flamingo.one
  }
});
