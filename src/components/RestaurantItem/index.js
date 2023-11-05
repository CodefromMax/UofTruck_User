import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

// A component, 1 component per js
const RestaurantItem = ( { restaurant } ) => {
  
  return(
    <View style={styles.restaurant_Container}>
      <Image 
        source ={{
          uri: restaurant.image,
        }}
        style={styles.image} 
      />

      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text style={styles.subtitle}>${restaurant.deliveryFee}      {
            restaurant.minDeliveryTime
          }-{
            restaurant.maxDeliveryTime
          } mins
          </Text>
        </View>
        
        <View style={styles.rating}>
          <Text>{restaurant.rating}</Text>
        </View>
      
      </View>
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
      marginVertical:10,
    },
    image:{
      width: "100%",
      aspectRatio: 5/3,
      marginBottom: 5,
    },
    title:{
      fontSize: 19,
      fontWeight: 500,
      marginVertical: 5,
    },
    subtitle:{
      color: "grey", 
    },
    row:{
      flexDirection:"row",
      alignItems: "center"
    },
    rating: {
      marginLeft: "auto",
      backgroundColor:"lightgray",
      width: 25,
      height: 25,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 30,
    },
  });
  