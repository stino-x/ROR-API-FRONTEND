import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomGreeting } from '../redux/greeting/greetingSlice';

function Greeting() {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting.greetings);

  useEffect(() => {
    dispatch(getRandomGreeting());
  }, [dispatch]);

  return (
    <div className="greeting">
      <h1>Random Greeting:</h1>
      <p>{greeting}</p>
    </div>
  );
}

export default Greeting;
