import React from 'react';
import {
  View, Text, FlatList, Button, StyleSheet, TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useBlogContext } from '../context/BlogContext';

const IndexScreen = ({ navigation }) => {
  const { state, addBlogPost, removeBlogPost } = useBlogContext();

  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(post) => post.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
              <View style={styles.post}>
                <Text style={styles.title}>
                  {item.title}
                </Text>
                <TouchableOpacity onPress={() => removeBlogPost(item.id)}>
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" style={styles.plusIcon} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  plusIcon: {
    marginRight: 10,
    fontSize: 30,
  },
  post: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 5,
    borderWidth: 2,
    marginBottom: 1,
    marginHorizontal: 1,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;
