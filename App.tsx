import {StatusBar} from 'expo-status-bar';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Animated, {
    useAnimatedRef,
    useAnimatedScrollHandler,
    useDerivedValue,
    useSharedValue
} from 'react-native-reanimated';
import {BGCOLOR, PAGES} from "./constants";
import Page, {PAGE_WIDTH} from "./components/Page";
import {AntDesign} from '@expo/vector-icons';
import Dot from "./components/Dot";
import {useCallback} from "react";

export default function App() {

    const translateX = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            translateX.value = event.contentOffset.x;
        }
    })

    const activeIndex = useDerivedValue(() => {
        return Math.round(translateX.value / PAGE_WIDTH)
    })

    const scrollRef = useAnimatedRef<ScrollView>();

    const onIconPress = useCallback(() => {
        if (activeIndex.value === PAGES.length - 1) return;
        scrollRef.current?.scrollTo({x: PAGE_WIDTH * (activeIndex.value + 1)})
    }, [],);

    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <Animated.ScrollView style={{flex: 1}} horizontal pagingEnabled showsHorizontalScrollIndicator={false}
                                 ref={scrollRef as any}
                                 onScroll={scrollHandler}
                                 scrollEventThrottle={16}>
                {
                    PAGES.map((page, index) =>
                        <Page page={page} key={index} translateX={translateX} index={index}/>
                    )
                }
            </Animated.ScrollView>
            <View style={styles.footer}>
                <View style={styles.paginator}>
                    {
                        PAGES.map((_, index) =>
                            <Dot key={index.toString()} index={index} activeDot={activeIndex}/>
                        )
                    }
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>View Board</Text>
                </View>
                <View style={styles.iconContainer}>
                    <AntDesign name="arrowright" size={24} color="black" onPress={onIconPress}/>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BGCOLOR,
    },
    footer: {
        height: 50,
        flexDirection: 'row',
        marginBottom: 50
    },
    paginator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 16,
        textTransform: 'uppercase',
        letterSpacing: 1.5,
        fontWeight: '500'
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

});
