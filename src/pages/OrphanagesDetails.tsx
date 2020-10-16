import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OrphanageDetails(){
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Troquei de página</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text:{
    fontSize: 32
  }
})