const initialState = {
  age: 0,
  name: '',
};

const reducer = (state = initialState, { type, payload }) => {
  const newState = { ...state };

  console.log('newState: ' + JSON.stringify(newState), 'payload: ', payload);

  switch (type) {
    case 'AGE_UP':
      newState.age++;
      break;
    case 'AGE_DOWN':
      newState.age--;
      break;
    case 'COMPUTE_NAME':
      console.log('Got here!!!');
      break;

    default:
      break;
  }
  return newState;
};

export default reducer;
