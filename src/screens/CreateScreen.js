import React, { useState } from 'react';
import {
  View, Text, TextInput, StyleSheet, Button,
} from 'react-native';
import { useBlogContext } from '../context/BlogContext';

const CreateScreen = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addBlogPost } = useBlogContext();

  const onAdd = () => {
    addBlogPost({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput style={styles.input} value={content} onChangeText={setContent} />
      <Button title="Add Blog Post" onPress={onAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    margin: 10,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
  },
});

export default CreateScreen;
