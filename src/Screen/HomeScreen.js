import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import {ReactNative, RocketIcons} from './../assets/index';
import FastImage from 'react-native-fast-image';

const {width, height} = Dimensions.get('window');

export const listView = [
  {
    id: 1,
    name: 'Checkbox',
    nameNavigate: 'Checkbox',
    icon: RocketIcons,
  },
  {
    id: 2,
    name: 'InputFlatlist',
    nameNavigate: 'InputFlatlist',
    icon: RocketIcons,
  },
  {
    id: 3,
    name: 'InputFomik',
    nameNavigate: 'InputFomik',
    icon: RocketIcons,
  },
  {
    id: 4,
    name: 'FlexComponent',
    nameNavigate: 'FlexComponent',
    icon: RocketIcons,
  },
  {
    id: 5,
    name: 'BottomSheet',
    nameNavigate: 'BottomSheetHome',
    icon: RocketIcons,
  },
  {
    id: 6,
    name: 'Map View',
    nameNavigate: 'MapView',
    icon: RocketIcons,
  },
  {
    id: 7,
    name: 'Show Alert',
    nameNavigate: 'ShowAlert',
    icon: RocketIcons,
  },
  {
    id: 8,
    name: 'Header Top',
    nameNavigate: 'HeaderTop',
    icon: RocketIcons,
  },
  {
    id: 9,
    name: 'Loading',
    nameNavigate: 'Loading',
    icon: RocketIcons,
  },
  {
    id: 10,
    name: 'BottomTab',
    nameNavigate: 'IndexBottomTab',
    icon: RocketIcons,
  },
  {
    id: 11,
    name: 'Modals',
    nameNavigate: 'Modals',
    icon: RocketIcons,
  },
  {
    id: 12,
    name: 'Rate',
    nameNavigate: 'Rate',
    icon: RocketIcons,
  },
  {
    id: 13,
    name: 'Svg',
    nameNavigate: 'Svg',
    icon: RocketIcons,
  },
  {
    id: 14,
    name: 'HeadBubbleChat',
    nameNavigate: 'HeadBubbleChat',
    icon: RocketIcons,
  },
  {
    id: 15,
    name: 'List Animation',
    nameNavigate: 'ListAnimation',
    icon: RocketIcons,
  },
  {
    id: 16,
    name: 'Banner',
    nameNavigate: 'IndexBanner',
    icon: RocketIcons,
  },
  {
    id: 17,
    name: 'Swipeable',
    nameNavigate: 'Swipeable',
    icon: RocketIcons,
  },
  {
    id: 18,
    name: 'Menu',
    nameNavigate: 'Horizontal',
    icon: RocketIcons,
  },
];

export const HomeScreen = ({navigation}) => {
  
  const onpressHandle = nameNavigate => {
    navigation.navigate(nameNavigate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoReactNative}>
        <FastImage source={ReactNative} style={styles.imageLogo} />
      </View>
      <FlatList
        data={listView}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <View style={styles.containerItems}>
              <TouchableOpacity
                style={styles.boxItems}
                onPress={() => onpressHandle(item.nameNavigate)}>
                <FastImage style={styles.icon} source={item.icon} />
                <Text style={styles.title}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoReactNative: {
    marginBottom: 20,
    backgroundColor: '#071f13',
  },
  containerItems: {
    width: width / 2 - 30,
    height: 100,
    marginBottom: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  boxItems: {
    borderRadius: 16,
    height: '100%',
    // marginBottom:5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 50,
    width: 50,
  },
  title: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'auto',
  },
  btnCheckbox: {
    backgroundColor: '#1273de',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 8,
  },
  imageLogo: {
    height: 210,
    width: width,
  },
  text: {
    marginHorizontal: 10,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
