import React,{useRef,useState,useEffect} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    Dimensions,
    StyleSheet,
} from 'react-native'

const HotLiquid = () => {
  return (
    <View style={styles.container}>
      <Text>Hot</Text>
    </View>
  )
}
export default HotLiquid

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
})
