import React from 'react';
import './card-list.css';
import Card from '../card';

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map(m => (
        <Card key={m.id} monster={m} />
      ))}
    </div>
  );
};

export default CardList;
