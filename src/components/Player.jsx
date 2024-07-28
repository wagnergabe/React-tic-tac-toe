import { useState } from 'react';

function Player(props) {
const [initialName, setInitialName] = useState(props.name)
const [isEditing, setIsEditing] = useState(false);


function handleEditing() {
  setIsEditing((editing) => !editing );
}

function handleChange(event) {
  setInitialName(event.target.value)
}

let playerName = <span className="player-name">{initialName}</span>

if(isEditing) {
  playerName = <input type="text" required value = {initialName} onChange={handleChange}/>;
}

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{props.symbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}

export default Player;
