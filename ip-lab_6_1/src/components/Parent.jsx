import React from 'react';
import Header from './Header';
import Card from './Card'; 
import myImage from '../a.jpg';

export default function Parent(props) {
  const { headerText, imgSrc } = props;

  return (
    <div className="page">
      <Header text={headerText} />
      <div className="left-half">
        <img src={myImage} alt="" />
        <h1>Yash Uskelwar</h1>
        <h4>Software Developer</h4>
      </div>
      <hr />
      <div className="right-half">

        <Card title="Skills" description="Coding" />
        <Card title="Educations" description="Schooling: BVM SKN "  />
        <Card title="Timeline" description="...." />
      </div>
    </div>
  );
}
