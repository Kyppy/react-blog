const initState = {
  posts: [
    {"title": "Burgers competition", "body": "lorem blah blah", "id": "1"},
    {"title": "Vegetable Burger", "body": "lorem blah blah", "id": "2"},
    {"title": "Burnt Burgers", "body": "lorem blah blah", "id": "3"},
    {"title": "Special Burger day", "body": "lorem blah blah", "id": "4"},
  ],
};

const rootReducer = (state = initState, action) => {
  if (action.type == 'DELETE_POST') {
    const Posts = state.posts.filter(post => {
      return action.id !== post.id;
    })
    return {
      ...state,
      posts: Posts,
    };
  }
  return state;
}

export default rootReducer;
