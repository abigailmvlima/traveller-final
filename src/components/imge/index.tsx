import React from 'react';

interface ImgeProps {
  src: string;
  alt: string;
}

const Imge: React.FC<ImgeProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

export default Imge;
