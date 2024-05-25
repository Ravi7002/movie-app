import React from 'react';
import { SafeAreaProvider }  from 'react-native-safe-area-context';
import Screen from './src/screens/Screen';

const App = () => {
  return (
      <SafeAreaProvider>

           <Screen/>

      </SafeAreaProvider> 
  )
}

export default App;