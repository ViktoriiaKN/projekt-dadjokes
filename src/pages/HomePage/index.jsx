import './style.css';
import '../../../src/global.css';
import { useEffect, useState } from 'react';
import { Joke } from '../../components/Joke';

export const HomePage = () => {
const [jokes, setJokes] = useState([]);

useEffect (() => {
  const getJokes = async () => {
    const response = await fetch('http://localhost:4000/api/jokes');
    const data = await response.json();
    setJokes(data.data);
  };
  
  getJokes();
}, []);

const handleLike = (id) => {
  setJokes((previousJokes) => {
    return previousJokes.map(joke => {
      if (joke.id === id) {
        joke.likes = joke.likes + 1;
      }
      return joke;
    });
  });
};

const handleDislike = (id) => {
  setJokes((currentJokes) => {
    return currentJokes.map(joke => {
      if (joke.id === id) {
        joke.dislikes = joke.dislikes + 1;
      }
      return joke;
    });
  });
};

  return (
    <div className="container">
      {jokes.map((joke) => (
        <Joke
          key={joke.id}
          userAvatar={joke.avatar}
          userName={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
          handleLike={() => handleLike(joke.id)}
          handleDislike={() => handleDislike(joke.id)}
        />
      ))}
    </div>
  );
};
