import Carrinho from './src/pages/Carrinho';
import { View, StatusBar, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Carrinho/>
    </SafeAreaView>
  );
}