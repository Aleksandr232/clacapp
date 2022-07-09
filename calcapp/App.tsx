import React,{useState} from 'react';
import { StyleSheet, View, Switch, SafeAreaView } from 'react-native';
import { ThemeCotext } from './src/context/ThemeCotext';
import { myColors } from './src/styles/Colors';
import MyKeyboard from './src/components/MyKeyboard';


export default function App() {
  const[theme, setTheme]=useState('light')
  return (
    <ThemeCotext.Provider value={theme}>
      <SafeAreaView  style={theme === 'light' ? styles.container : [styles.container,{backgroundColor:'#000'}]}>
          <Switch
            value={theme === 'lighe'}
            onValueChange={()=>setTheme(theme === 'light' ? 'dark' : 'light')}
            style={styles.swt}
          />
        <MyKeyboard/>
      </SafeAreaView>
    </ThemeCotext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  swt:{
    top:20
  }
  
});
