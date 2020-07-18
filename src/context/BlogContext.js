import { useContext } from 'react';
import createDataContext from './createDataContext';

const getId = () => Math.floor(Math.random() * 999).toString();

const blogReducer = (state, action) => {
  const { type, payload } = action;
  const filterById = (id) => state.filter((post) => post.id !== id);

  switch (type) {
    case 'add_blogPost': {
      const id = getId();
      return [...state, { id, ...payload }];
    }

    case 'remove_blogPost':
      return filterById(payload.id);

    case 'update_blogPost': {
      const filteredPosts = filterById(payload.id);
      return [...filteredPosts, { ...payload }];
    }

    default:
      return state;
  }
};

const addBlogPost = ({ title, content }) => ({
  type: 'add_blogPost',
  payload: { title, content },
});

const updateBlogPost = ({ title, content, id }) => ({
  type: 'update_blogPost',
  payload: { id, title, content },
});

const removeBlogPost = (id) => ({ type: 'remove_blogPost', payload: { id } });

const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, removeBlogPost, updateBlogPost },
  [{ id: '1', title: 'default title', content: 'default content' }],
);

export const BlogProvider = Provider;

export const useBlogContext = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error('useBlogContext must be used within a BlogProvider');
  }

  return context;
};
