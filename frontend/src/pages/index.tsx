import React from 'react';

import SvgBackgroundImage from '../../public/images/svg/scattered-forcefields.svg';
import HomePage from '../components/HomePage';

type Props = {};

// eslint-disable-next-line no-empty-pattern
export default function index({}: Props) {
  return (
    <>
      <HomePage svgUrl={SvgBackgroundImage} />
    </>
  );
}
