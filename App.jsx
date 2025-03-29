import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import { NavigationContainer } from '@react-navigation/native';
import styles from './globalStyles';
import { useEffect } from 'react';
import BottomTabs from './src/navigation/BottomTabs';



export default function App() {
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync('#F5F5F5');
    NavigationBar.setButtonStyleAsync('dark');
  }, []);

  
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}