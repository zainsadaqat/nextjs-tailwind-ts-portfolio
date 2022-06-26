import React from 'react';

interface SubTitleI {
  subTitle: string;
}

const SubTitle = ({ subTitle }: SubTitleI) => {
  return <h3 className="mt-4 text-primaryColor font-semibold">{subTitle}</h3>;
};

export default SubTitle;
