import React from "react";
import {StyleSheet, View, Animated, Easing} from "react-native";
import {QED_Group} from "../constants/Colors";
import {createAnimation} from './Animation';

export default class LoaderThreeDots extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.yLoading1Anim = new Animated.Value(0);
        this.yLoading2Anim = new Animated.Value(0);
        this.yLoading3Anim = new Animated.Value(0);
    }

    componentDidMount() {
        this.playAnimations()
    }

    playAnimations = () => {
        Animated.loop(Animated.sequence([
            Animated.parallel([
                createAnimation(this.yLoading1Anim, -40, 500, Easing.ease, 0, false),
                createAnimation(this.yLoading2Anim, -40, 500, Easing.ease, 250, false),
                createAnimation(this.yLoading3Anim, -40, 500, Easing.ease, 500, false)
            ]),
            Animated.parallel([
                createAnimation(this.yLoading1Anim, 0, 500, Easing.ease, 0, false),
                createAnimation(this.yLoading2Anim, 0, 500, Easing.ease, 250, false),
                createAnimation(this.yLoading3Anim, 0, 500, Easing.ease, 500, false)
            ])
        ])).start()
    }

    render() {
        const {colors, dotSize} = this.props
        return (
            <View style={styles.loadingContainer}>
                <Animated.Text
                    style={[
                    styles.loading, {
                        color: colors && colors[0] || QED_Group.two,
                        top: this.yLoading1Anim,
                        fontSize: dotSize || 40
                    }
                ]}>⬤</Animated.Text>
                <Animated.Text
                    style={[
                    styles.loading, {
                        color: colors && colors[1] || QED_Group.three,
                        top: this.yLoading2Anim,
                        fontSize: dotSize || 40
                    }
                ]}>⬤</Animated.Text>
                <Animated.Text
                    style={[
                    styles.loading, {
                        color: colors && colors[2] || QED_Group.four,
                        top: this.yLoading3Anim,
                        fontSize: dotSize || 40
                    }
                ]}>⬤</Animated.Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loadingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.75
    },
    loading: {
        paddingHorizontal: 15
    }
});