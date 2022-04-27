import React from 'react';

export default function ScoreBoard({ wins, losses}){

  return (
    <div>
      WINS: {wins} LOSSES: {losses}
    </div>
  )
}