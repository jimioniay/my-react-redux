import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import JokeContainer from './JokeContainer';

function JokeComponent() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = () => {
    fetch('http://api.icndb.com/jokes/random/3')
      .then(resp => resp.json())
      .then(respData => setJokes([...jokes, respData.value]))
      .catch(err => err);
  };

  return (
    <div className="container text-center mt-4 pb-4 border border-success rounded">
      <h1 className="lead display-4">Chuck Norris Jokes</h1>
      <div className="card-columns">
        {jokes.map(jokeItem => {
          <JokeContainer key={jokeItem.id} joke={jokeItem} />;
        })}
      </div>
    </div>
  );
}

// const mapStateToProps = state => ({});

// const mapDispatchToProps = {};

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(JokeComponent);

export default JokeComponent;
