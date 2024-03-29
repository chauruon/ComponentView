import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  FlatList,
} from "react-native";
import {COLOR, SHADOWS, SIZE, TEXT } from "../../theme"
import { useDispatch, useSelector } from "react-redux";

const food1 = require("../../assets/image/food1.jpg");
const food2 = require("../../assets/image/food2.jpg");
const food3 = require("../../assets/image/food3.jpg");
const food4 = require("../../assets/image/food4.jpg");
const food5 = require("../../assets/image/food5.jpg");
// const food6 = require("../../assets/Image/");


export const MenuHorizontal = () => {
  const ref = React.createRef<any>();
  const [counter,setCounter] = useState(0);
  const dispatch = useDispatch();
//   const value = useSelector((state:any) => state.tong.giaTri)
  const carouselItems= [
    {
      id:1,
      image:food1,
      title:"ksadjfhoajkadkd",
    },
    {
      id:2,
      image:food2,
      title:"ksadjfhoajkadkd",
    },
    {
      id:3,
      image:food3,
      title:"ksadjfhoajkadkd",
    },
    {
      id:4,
      image:food4,
      title:"ksadjfhoajkadkd",
    },
    {
      id:5,
      image:food1,
      title:"ksadjfhoajkadkd",
    },
    {
      id:6,
      image:food2,
      title:"ksadjfhoajkadkd",
    },
    {
      id:7,
      image:food3,
      title:"ksadjfhoajkadkd",
    },
    {
      id:8,
      image:food4,
      title:"ksadjfhoajkadkd",
    },
  ];



  const _menuList = ({ item, index }:{item:any,index:number}) => {
    return (
      <TouchableOpacity style={{flexDirection:"row",}} activeOpacity={0.8} key={`${index}-cart`}>
        <View style={{
          margin:4,
          width:SIZE.width/7 + 1
        }}>
          <View style={{
            alignItems:"center",
            width:"100%",
            padding:5,
            borderRadius:9,
            ...SHADOWS.sh,
            backgroundColor: COLOR.white,
          }}>
            <Image style={{
              height:35,
              width:35,
            }}
              source={item.image}/>
            
            <Text numberOfLines={2} style={{
              textAlign:"center",
              ...TEXT.fz12,
              ...TEXT.medium,
              width:"100%",
            }}>
              {item.title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={{backgroundColor:COLOR.white,flex:1}}>
      {/* Menu */}
      <View style={{marginTop:10,}}>
        <ScrollView horizontal scrollEnabled={true}>
          <FlatList
            numColumns={6}
            data={carouselItems}
            scrollEnabled={true}
            keyExtractor={(item,index) => index.toString()}
            renderItem={_menuList}
          />
        </ScrollView>
      </View>

      {/* Body */}
      <View style={{marginTop:10,}}>
        <Text>dsjhfgdfjhsgjklf</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  paginationContainer: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 10,
  },
  dotStyle: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: COLOR.primary80,
    marginHorizontal: -4,
  },
  inactiveDotStyle: {
    backgroundColor: 'white',
    borderWidth:1,
    width: 9,
    height: 9,
    borderColor:COLOR.gray,
  },
})