import React from 'react';
import { View, Text } from 'react-native';
import { useBlogContext } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state } = useBlogContext();
  const post = state.find((p) => p.id === id);

  return (
    <View>
      <Text>{post.title}</Text>
    </View>
  );
};

export default ShowScreen;
