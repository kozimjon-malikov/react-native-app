import { Alert, Button, FlatList, Image, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import React from 'react';
const dataApi = [
  {
    id: 1,
    name: 'Iphone',
    img: require('../assets/images/app-1.jpg')
  },
  {
    id: 2,
    name: 'Iphone Pro max',
    img: require('../assets/images/app-2.jpg')

  },
  {
    id: 3,
    name: 'Samsung',
    img: require('../assets/images/app-3.jpg')

  },
  {
    id: 4,
    name: 'Ipad',
    img: require('../assets/images/books-1.jpg')

  },
  {
    id: 5,
    name: 'Book',
    img: require('../assets/images/books-2.jpg')

  },
]
const Items = ({ item }) => {
  return (
    <View style={styles.main}>
      <Image style={styles.img} source={item.img} resizeMode='cover' />
      <Text style={styles.txt}>{item.name}</Text>
    </View>
  )
}


const Rootlayout = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'crimson'} />
      <Text style={{ fontSize: 25, textAlign: 'center', marginTop: 35, }}>Welcome to Apello</Text>
      <View style={{ flex:1 }}>
        <FlatList
          data={dataApi}
          onEndReached={()=>Alert.alert('oxiriga kelding','uka')}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (<Items item={item} />)}
        />
      </View>
      <Button title='See more'></Button>
      <Pressable>
        {({pressed})=>(
          <Text style={styles.btn}>{pressed?'Pressed':'Press me'}</Text>
        )}
      </Pressable>
    </SafeAreaView>
  );
};

export default Rootlayout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lime',
    flex: 1,
  },
  main: {
    marginTop: 35,
    width: '90%',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 'auto',
    borderRadius: 10,
    overflow: 'hidden',

  },
  img: {
    height: 200,
    width: '100%',
  },
  txt: {
    color: '#fff',
    fontSize: 25,
    margin: 'auto',
    width: '90%',
    padding: 5
  },
  btn:{
    backgroundColor:'crimson',
    textAlign:'center',
    padding:20,
    color:'#fff',
    fontSize:30
  }
});
