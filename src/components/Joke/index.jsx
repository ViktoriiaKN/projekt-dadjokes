import './style.css';


export const Joke = ({userAvatar, userName, text, likes, dislikes, handleLike, handleDislike}) => {
  return (
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={userAvatar} alt={`${userName}'s avatar`} />
            <p className="user__name">{userName}</p>
          </div>

          <p className="joke__text">
            {text}
          </p>
        </div>
        <div className="joke__likes">
          <button onClick={handleLike} className="btn-like btn-like--up"></button>
          <span className="likes-count likes-count--up">{likes}</span>
          <button onClick={handleDislike} className="btn-like btn-like--down"></button>
          <span className="likes-count likes-count--down">{dislikes}</span>
        </div>
      </div>
)}

