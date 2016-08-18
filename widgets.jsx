import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs'

class Widgets extends React.Component {
  render () {
    let panes = [{title: "HP", content: "Harrpy potter is the bestest"}, {title: "Star Trek", content: "Star trek is for nerdles"}];
    return (
      <Tabs panes={panes} />
    );
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Widgets />, root);
});