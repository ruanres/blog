import React from 'react';
import { useBlogContext } from '../context/BlogContext';
import PostForm from '../components/PostForm';

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, updateBlogPost } = useBlogContext();
  const post = state.find((p) => p.id === id);

  const onSubmit = (title, content) => {
    updateBlogPost({ id: post.id, title, content });
    navigation.pop();
  };

  return <PostForm onSubmit={onSubmit} values={post} />;
};

export default EditScreen;
