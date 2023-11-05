import { StyleSheet, FlatList } from 'react-native';
import RestaurantItem from "../../components/RestaurantItem";
import restaurants from "../../../assets/data/restaurants.json";

// props from parent to child
export default function HomeScreen() {
  return (  
    
    <FlatList data={restaurants}
    // {destructuring the item from the property of this functional component}
    renderItem={({ item })=> <RestaurantItem restaurant={item} />}
    />
    
  );
}

const styles = StyleSheet.create({});