import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

// A component, 1 component per js
const RestaurantItem = ( {restaurant} ) => {
  
  return(
    <View style={styles.restaurant_Container}>
      <Image 
        source ={{
          uri:restaurant.image,
        }}
        style={styles.image} 
      />
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.subtitle}>${restaurant.deliveryFee}      {
        restaurant.minDeliveryTime
      }-{
        restaurant.maxDeliveryTime
      } mins
      </Text>
      </View>
  );
};

export default RestaurantItem;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding:10,
    },
    restaurant_Container:{
      width:'100%',
      marginVertical:5,
    },
    image:{
      width: "100%",
      // height: 10,
      aspectRatio: 5/3,
      marginBottom: 5,
    },
    title:{
      fontSize: 16,
      fontWeight: 500,
      MarginVertical: 5,
    },
    subtitle:{
      color: "grey",
  
    },
  });
  