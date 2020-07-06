import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogPost':
      return [...state, { title: `Blog Post #${state.length}` }];
    default:
      return state;
  }
};

const addBlogPost = () => ({ type: 'add_blogPost' });

const actions = { addBlogPost };
export const { Context, Provider } = createDataContext(blogReducer, actions, []);
