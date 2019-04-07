const initState = {
  posts: [
    {"title": "Burgers competition", "body": "lorem blah blah", "id": "1"},
    {"title": "Vegetable Burger", "body": "lorem blah blah", "id": "2"},
    {"title": "Burnt Burgers", "body": "lorem blah blah", "id": "3"},
    {"title": "Special Burger day", "body": "lorem blah blah", "id": "4"},
  ],
};

const rootReducer = (state = initState, action) => (
  state
);

export default rootReducer;
