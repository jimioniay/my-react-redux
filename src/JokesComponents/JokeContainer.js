import React from 'react';
import PropTypes from 'prop-types';
const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

function JokeContainer({ id, joke, category }) {
  return (
    <div>
      <div className="card bg-primary text-white text-center p-3">
        <h5 className="card-title">#{id}</h5>
        <blockquote className="blockquote mb-0">
          <p>{entities.decode(joke)}</p>
          <footer className="blockquote-footer text-white">
            <small>
              {String(category) === 'undefined' ? 'Misc' : category} by{' '}
              <cite title="Source Title">Chuck Norris</cite>
            </small>
          </footer>
        </blockquote>
      </div>
    </div>
  );
}

// JokeContainer.propTypes = {
//   joke: PropTypes.arrayOf({
//     id: PropTypes.number.isRequnnired,
//     joke: PropTypes.string.isRequired,
//     category: PropTypes.string,
//   }).isRequired,
// };

JokeContainer.defaultProps = {
  joke: [],
};

export default JokeContainer;
