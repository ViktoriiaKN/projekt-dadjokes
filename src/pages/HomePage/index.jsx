import './style.css';
import '../../../src/global.css';
import { useState } from 'react';

export const HomePage = () => {
const [jokes, setJokes] = useState([{
  id: 'user01',
      avatar: 'https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png',
      name: 'Neroxx',
      text:
        'The secret service isn\'t allowed to yell "Get down!" anymore when the president is about to be attacked. Now they have to yell "Donald, duck!"',
      likes: 0,
      dislikes: 0,
}])

const handleLike = () => {
  setJokes((currentJoke) => {
    const updateJokes = currentJoke.slice();
    const firstJoke = updateJokes[0];
    firstJoke.likes += 1;
    return updateJokes;
  });
};

const handleDislike = () => {
  setJokes((currentJoke) => {
    const updatedJokes = currentJoke.slice(); 
    const firstJoke = updatedJokes[0];
    firstJoke.dislikes += 1; 
    return updatedJokes; 
  });
};

  return (
    <div className="container">
{jokes.map(joke => (
      <div key={joke.id}className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={joke.avatar} alt={`${joke.name}'s avatar`} />
            <p className={joke.name}>Neroxx</p>
          </div>

          <p className="joke__text">
            {joke.text}
          </p>
        </div>
        <div className="joke__likes">
          <button onClick={handleLike} className="btn-like btn-like--up"></button>
          <span className="likes-count likes-count--up">{joke.likes}</span>
          <button onClick={handleDislike} className="btn-like btn-like--down"></button>
          <span className="likes-count likes-count--down">{joke.dislikes}</span>
        </div>
      </div>
))}
    </div>
  );
};
