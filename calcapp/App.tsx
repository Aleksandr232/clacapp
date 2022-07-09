import React,{useState} from 'react';
import { StyleSheet, View, Switch } from 'react-native';
import { ThemeCotext } from './src/context/ThemeCotext';

export default function App() {
  const[theme, setTheme]=useState('light')
  return (
    <ThemeCotext.Provider value={theme}>
      <View style={theme === 'light' ? styles.container : [styles.container,{backgroundColor:'#000'}]}>
          <Switch
            value={theme === 'lighe'}
            onValueChange={()=>setTheme(theme === 'light' ? 'dark' : 'light')}
          />
      </View>
    </ThemeCotext.Provider>
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
