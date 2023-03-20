import { StatusBar } from 'expo-status-bar';
import {Animated, ScrollView, StyleSheet, Text, View} from 'react-native';
import {BGCOLOR, PAGES} from "./constants";
import Page from "./components/Page";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView style={{flex: 1}} horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
        {
          PAGES.map((page, index)=>
            <Page page={page} key={index} />
          )
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BGCOLOR,
  },
});
