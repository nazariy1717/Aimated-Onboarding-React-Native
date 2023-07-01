import {Dimensions, Image, Text, StyleSheet, View} from "react-native";
import {BGCOLOR, PagesInterface} from "../constants";
import React from "react";
import Animated, {Extrapolate, interpolate, useAnimatedStyle} from 'react-native-reanimated';

interface PageProps  {
    page: PagesInterface,
    translateX: Animated.SharedValue<number>,
    index: number
}

const {width: PAGE_WIDTH, height: PAGE_HEIGHT} = Dimensions.get('window');

const Page: React.FC<PageProps> = ({page, translateX, index}) => {

    const rCircleStyle = useAnimatedStyle(()=>{
        const inputRange = [
            (index - 1) * PAGE_WIDTH,
            (index) * PAGE_WIDTH,
            (index+ 1) * PAGE_WIDTH,
        ];
        const scale = interpolate(translateX.value, inputRange, [0,1,0], Extrapolate.CLAMP);

        return {
            transform: [{scale}]
        }
    });

    const rImageStyle = useAnimatedStyle(()=>{
        const inputRange = [
            (index - 1) * PAGE_WIDTH,
            (index) * PAGE_WIDTH,
            (index+ 1) * PAGE_WIDTH,
        ];
        const rotation = interpolate(translateX.value, inputRange, [0,0,1], Extrapolate.CLAMP);

        const opacity = interpolate(translateX.value, inputRange, [0,1,0], Extrapolate.CLAMP)
        return {
            transform: [{rotate: `${rotation * Math.PI}rad`}],
            opacity: opacity
        }
    });

    return (
        <View style={styles.container}>
            <View style={styles.circleContainer}>
                <Animated.View style={[styles.circle, rCircleStyle]} />
                <Animated.Image
                    source={page.source}
                    style={[styles.image,rImageStyle]}
                    resizeMode={"contain"}
                />
            </View>
            <Text style={styles.title}>{page.title}</Text>
            <Text style={styles.description}>{page.description}</Text>
        </View>
    )
}

export default Page;

const CIRCLE_WIDTH = PAGE_WIDTH * 0.7;
export { PAGE_WIDTH };

const styles = StyleSheet.create({
    container: {
        width: PAGE_WIDTH,
        height: PAGE_HEIGHT,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 50,
    },
    circleContainer: {
        width: CIRCLE_WIDTH,
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 120,
    },
    image: {
        height: PAGE_HEIGHT * 0.5,
        aspectRatio: 1,
        position: "absolute",
    },
    circle: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        borderRadius: CIRCLE_WIDTH / 2,
    },
    title: {
        textAlign: "center",
        fontSize: 35,
        fontWeight: "700",
        marginBottom: 15,
    },
    description: {
        textAlign: 'center',
        fontSize: 14,
        color: 'gray'


    }
});
