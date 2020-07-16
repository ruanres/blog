import { useContext } from 'react';
import createDataContext from './createDataContext';

const getId = () => Math.floor(Math.random() * 999).toString();

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogPost': {
      const id = getId();
      return [...state, { id, title: `Blog Post #${id}` }];
    }
    case 'remove_blogPost':
      return state.filter((post) => post.id !== action.payload.id);
    default:
      return state;
  }
};

const addBlogPost = () => ({ type: 'add_blogPost' });

const removeBlogPost = (id) => ({ type: 'remove_blogPost', payload: { id } });

const actions = { addBlogPost, removeBlogPost };

const { Context, Provider } = createDataContext(blogReducer, actions, []);

export const BlogProvider = Provider;

export const useBlogContext = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error('useBlogContext must be used within a BlogProvider');
  }

  return context;
};
