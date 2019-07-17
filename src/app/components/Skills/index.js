import React from 'react';
import './index.css';

function Skills(props) {
  return (<section className="Skills">
    <h3>SKILLS</h3>
    <ul>{props.items.map(
      item => (<li className={`Skills--item-${item.level}`}>{item.text}</li>)
    )}</ul>
  </section>);
};

export default Skills;
