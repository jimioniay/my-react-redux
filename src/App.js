import React from 'react';

import Main from './Main';
import MainRedux from './MainRedux';
import JokeComponent from './JokesComponents/JokeComponent';

function App() {
  return (
    <div>
      <Main name="Ayomide" />
      <MainRedux name="Ayomide" />
      <JokeComponent />
    </div>
  );
}

export default App;
