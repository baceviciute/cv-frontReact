import React from 'react';
import './index.css';

function Item(data){
  return (
    <div className="Education--item">
      <h5 className="Education--item-degree">{`My degree: ${data.degree}`}</h5>
      <p className="Education--item-university">{data.university}</p>
      <p className="Education--item-year">{data.year}</p>
    </div>
  );
};

function Education(props) {
  return (<section className="Education">
    <h3>EDUCATION</h3>
    {props.items.map(Item)}
  </section>);
};

export default Education;
