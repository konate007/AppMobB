import { Feather, MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Dimensions, FlatList, Image, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ImageCarousel from './components/ImageCarousel';


export default function App() {
  const mesServicesData = [
    {
      id: '1',
      name: 'AIR & CLIM',
      image: require('./assets/airclim.png'),
    },
    {
      id: '2',
      name: 'Electroménager',
      image: require('./assets/electromenager.png'),
    },
    {
      id: '3',
      name: 'Réfrigérateur',
      image: require('./assets/refrigerateur.png'),
    },
    {
      id: '4',
      name: 'TV & Audio',
      image: require('./assets/tvaudio.png'),
    }
  ];
  const data: any[] = [
    {
      id: 0,
      uri: require('./assets/Itel-A58.jpg'),
      title: 'Dahlia',
    }, // https://unsplash.com/photos/Jup6QMQdLnM
    {
      id: 1,
      uri: require('./assets/c191.jpg'),
      title: 'Sunflower',
    }, // https://unsplash.com/photos/oO62CP-g1EA
    {
      id: 2,
      uri: require('./assets/VENTILATEUR-BEST-AREA-SOUMARI.jpg'),
      title: 'Zinnia',
    }, // https://unsplash.com/photos/gKMmJEvcyA8
    {
      id: 3,
      uri: require('./assets/VENTILLO-SOUMARI.jpg'),
      title: 'Tulip',
    }, // https://unsplash.com/photos/N7zBDF1r7PM
    {
      id: 4,
      uri: require('./assets/Tecno-CAMON-19-370x370.png'),
      title: 'Chrysanthemum',
    }, // https://unsplash.com/photos/GsGZJMK0bJc

  ]
  const [searchValue, setSearchValue] = useState("")
  const flatListRef1 = useRef<FlatList<any>>(null);
  const flatListRef2 = useRef<FlatList<any>>(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='orange' />
      <TouchableOpacity style={{ paddingVertical: 15, backgroundColor: 'orange', justifyContent: 'center', marginTop: 5 }}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>Appeler pour comander</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', marginVertical: 20 }}>
        <View style={{}}>
          <Image source={require('./assets/logo.png')} style={{ width: 150, height: 30 }} />
        </View>
        <View style={{ width: 185, flexDirection: 'row', justifyContent: 'flex-end' }}>
          <TouchableOpacity onPress={() => alert("Shopping Bag")} style={{ marginTop: 3 }}>
            <AntDesign name="hearto" size={30} color="green" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert("Bag...")} style={{ marginHorizontal: 5 }}>
            <SimpleLineIcons name="handbag" size={30} color="green" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert("User account")}>
            <MaterialIcons name='person' size={30} color='green' />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={{ width: 70, alignItems: 'center' }}
          onPress={() => alert("Menu ...")}>
          <MaterialIcons name='menu' size={40} color="green" />
        </TouchableOpacity>
        <View
          style={styles.searchBar}
        >
          {/* Input field */}
          <TextInput
            style={styles.input}
            placeholder="Rechercher"
            value={searchValue}
            onChangeText={setSearchValue}
          />
          {/* search Icon */}
          <View style={{ padding: 7, backgroundColor: "green" }}>
            <Feather
              name="search"
              size={20}
              color="#fff"
              style={{ marginLeft: 1 }}
            />
          </View>
        </View>
      </View>
      <View style={{ height: 280 }}>
        <ImageCarousel data={data} />
      </View>
      <View style={{ justifyContent: 'center', marginTop: 20 }}>
        <Text style={{ textAlign: 'center', fontSize: 20, color: 'green' }}>Top categories</Text>
      </View>
      <View style={styles.separator} />
      <ScrollView contentContainerStyle={{
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'center'
      }} horizontal={true} nestedScrollEnabled={true}>
        {mesServicesData?.map((val: any) =>
          <TouchableOpacity
            onPress={() => alert(val.name)}
            style={{ justifyContent: 'center', alignItems: 'center', }}>
            <Image source={val.image} style={{ width: 80, height: 80, marginHorizontal: 5, }} key={val.id} />
            <Text style={{ textAlign: 'center', fontSize: 12, color: 'gray' }}>{val.name}</Text>
          </TouchableOpacity>)}
      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    padding: 3,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    justifyContent: "flex-end",
  },
  input: {
    fontSize: 20,
    marginLeft: 5,
    paddingTop: -8,
    width: "80%",
  },

  cartCard: {
    flex: 1,
    height: '60@s',
    elevation: 2,
    borderRadius: 15,
    backgroundColor: 'white',
    marginHorizontal: '8@s',
    flexDirection: 'row',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        marginVertical: Platform.OS === 'ios' &&
          Dimensions.get('window').width >= 744 &&
          Dimensions.get('window').height <= 1366 ? 15 : 20
      },
      android: {
        marginVertical: 15
      }
    }),
  },

  separator: {
    borderWidth: 1,
    width: '90%',
    borderColor: '#fff',
    elevation: 2,
    marginTop: 10,
    alignItems: "center",
    marginLeft: 22,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
      }
    })
  }
});


