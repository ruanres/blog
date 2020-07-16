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
export const { Context, Provider } = createDataContext(blogReducer, actions, []);
