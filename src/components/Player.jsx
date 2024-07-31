import { useState } from 'react';

function Player({ name, symbol, isActive }) {
const [initialName, setInitialName] = useState(name)
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
    <li className = {isActive ? 'active' : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}

export default Player;
