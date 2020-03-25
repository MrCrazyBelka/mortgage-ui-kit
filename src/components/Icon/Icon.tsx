import React from 'react';
import classNames from 'classnames';

import './Icon.scss';

interface Icon {
  of?: string;
  className?: string;
  title?: string;
  size?: string;
}

const Icon: React.FC<Icon> = ({ of, className, title, size }) => (
  <i title={title} className={classNames(size, of, 'icon', className)} />
);

export default Icon;
