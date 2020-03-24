import React from 'react';
import { storiesOf } from '@storybook/react';
import { Icon } from '../Icon';

storiesOf('Icon', module).add('Icon', () => {
  return (
    <Icon of="edit" size="big"/>
  );
});
