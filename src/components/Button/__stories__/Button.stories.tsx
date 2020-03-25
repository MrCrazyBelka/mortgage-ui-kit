import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Button from '../Button';

storiesOf('Button', module).add('Button', () => {
  return <Button text={text('Text', '')} />;
});
