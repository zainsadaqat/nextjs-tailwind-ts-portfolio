import React from 'react';

interface ParagraphI {
  description: string;
}

const Paragraph = ({ description }: ParagraphI) => {
  return <p className="mt-4 max-w-xl text-lightGray">{description}</p>;
};

export default Paragraph;
