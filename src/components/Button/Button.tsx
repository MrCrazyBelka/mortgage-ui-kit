import React from 'react';
import { getText } from './helper';
import './Button.scss';

const Button = ({ text = '' }: { text: string }) => {
  return (
    <div className="button-container">
      <button className="button-new">{getText()}</button>
      <p>{text}</p>
    </div>
  );
};

export default Button;
