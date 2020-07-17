import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/github.json';

const Loading: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return <Lottie options={defaultOptions} height={400} width={400} />;
};

export default Loading;
