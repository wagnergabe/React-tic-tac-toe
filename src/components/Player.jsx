import { useState } from 'react';


function Player(props) {
const [isEditing, setIsEditing] = useState(false);

function handleEditing() {
  setIsEditing(true);
}

  return (
    <li>
      <span className="player">
        {!isEditing ? <span className="player-name">props.name</span> : <input type="text" required/>}
        <span className="player-symbol">{props.symbol}</span>
      </span>
      <button onClick={handleEditing}>Edit</button>
    </li>
  );
}

export default Player;
