import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { ThemeCotext } from './src/context/ThemeCotext';

export default function App() {
  const[theme, setTheme]=useState('light')
  return (
    <View style={theme === 'light' ? styles.container : [styles.container,{backgroundColor:'#000'}]}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Switch
        value={theme === 'lighe'}
        onValueChange={()=>setTheme(theme === 'light' ? 'dark' : 'light')}
      />
    </View>
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
