import React, {FC} from 'react';
import {StyleSheet, View} from "react-native";
import Animated, {Extrapolate, interpolate, useAnimatedStyle, withTiming} from 'react-native-reanimated';

interface DotProps {
    index: number,
    activeDot: Animated.SharedValue<number>
}

const Dot: FC<DotProps> = ({activeDot, index}) => {

    const rDotStyle = useAnimatedStyle(() => {
        const isActive = activeDot.value === index
        return {
            backgroundColor: withTiming(isActive ? 'black' :'white', {duration: 200})
        }
    })

    return (
        <Animated.View style={[styles.dot, rDotStyle]}/>
    );
}

const styles = StyleSheet.create({
    dot: {
        width: 15,
        height: 15,
        borderRadius: 10,
        marginHorizontal: 5,
        borderWidth: 1
    },
});


export default Dot;