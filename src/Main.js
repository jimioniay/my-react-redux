import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Main() {
  const [age, setAge] = useState(20);
  const [name, setName] = useState('');

  const handleAgeUp = () => {
    let newAge = age;
    newAge++;
    setAge(newAge);
  };

  const handleAgeDown = () => {
    let newAge = age;
    newAge--;
    setAge(newAge);
  };

  const handleOnChangeName = e => {
    setName(e.target.value);
  };
  return (
    <div className="container text-center mt-4 pb-4 border border-success rounded">
      <h1 className="lead display-4">Main</h1>
      <div className="d-flex justify-content-around">
        <div className="lead mt-4 form-control padding mr-4">
          <h6>Name: {name}</h6>
        </div>
        <div className="lead mt-4 form-control">
          <h6>Age: {age}</h6>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-around">
        <div className="">
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleOnChangeName}
            value={name}
          />
        </div>
        <div>
          <button onClick={handleAgeUp} className="btn btn-success">
            Age Up
          </button>
        </div>
        <div>
          <button onClick={handleAgeDown} className="btn btn-success">
            Age Down
          </button>
        </div>
      </div>
    </div>
  );
}

Main.propTypes = {
  age: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

Main.defaultProps = {
  age: 27,
  name: '',
};

export default Main;
