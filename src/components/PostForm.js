import React, { useState } from 'react';
import {
  View, Text, TextInput, StyleSheet, Button,
} from 'react-native';

const PostForm = ({ values, onSubmit }) => {
  const [title, setTitle] = useState(values?.title || '');
  const [content, setContent] = useState(values?.content || '');

  const onPress = () => {
    onSubmit(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      <Text style={styles.label}>Content:</Text>
      <TextInput style={styles.input} value={content} onChangeText={setContent} />
      <Button title="Submit" onPress={onPress} />
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

export default PostForm;
