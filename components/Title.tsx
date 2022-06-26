import React from 'react';

interface TitleI {
  name: string;
}
const Title = ({ name }: TitleI) => {
  return (
    <h1 className="text-4xl font-black text-darkMode md:text-6xl">
      I'm {name},
      <br />
      Glad to see you!
    </h1>
  );
};

export default Title;
