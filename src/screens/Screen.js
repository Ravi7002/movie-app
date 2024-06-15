import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {movieData} from '../data/MovieData';
import {ButtonComponent} from '../../components/ButtonComponents';

const HomeScreen = () => {
  console.log('halo');
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={movieData}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({item}) => {
          return (
            <View style={styles.dataContainer}>
              <Image style={styles.movieImage} source={{uri: item.imageLink}} />
              <View style={styles.movieDescriptionContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.yearContainer}>
                  <Text>{item.year}</Text>
                </View>
                <Text>{item.rating}</Text>
              </View>
              <View>
                <ButtonComponent
                  onPress={() => navigation.navigate('DetailMovie')}
                />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
  },
  flatListContainer: {
    padding: 8,
  },
  movieImage: {
    width: 130,
    height: 200,
    borderRadius: 10,
  },
  dataContainer: {
    margin: 10,
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  year: {
    margin: 3,
  },
  movieDescriptionContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 8,
  },
  yearContainer: {
    marginTop: 8,
    marginBottom: 8,
  },
});

export default HomeScreen;
