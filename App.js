import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View} from 'react-native';
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetailsScreen from "./src/screens/RestaurantDetailsScreen";

// props from parent to child
export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
      {/* <RestaurantDetailsScreen /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
    paddingVertical: 50,
  },
});