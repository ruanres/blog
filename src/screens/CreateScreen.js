import React from 'react';
import { useBlogContext } from '../context/BlogContext';
import PostForm from '../components/PostForm';

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useBlogContext();

  const onSubmit = (title, content) => {
    addBlogPost({ title, content });
    navigation.navigate('Index');
  };

  return <PostForm onSubmit={onSubmit} />;
};

export default CreateScreen;
