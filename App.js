import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home'
import RestaurantDetail from './screens/RestaurantDetail';

export default function App() {
  return (
    // <Home/>
    <RestaurantDetail />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
