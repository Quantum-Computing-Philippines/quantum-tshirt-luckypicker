import React from 'react';

import { SecondPage } from '../components/Pages/SecondPage';

type Props = {};

// eslint-disable-next-line no-empty-pattern
export default function Play({}: Props) {
  return (
    <>
      <div className="h-screen bg-indigo-600">
        <SecondPage />
      </div>
    </>
  );
}
