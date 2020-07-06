import React, { useContext } from 'react';
import {
  View, Text, FlatList, Button,
} from 'react-native';
import { Context } from '../context/BlogContext';

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blog) => blog.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default IndexScreen;
