import React from 'react';

export default class Tabs extends React.Component {
  constructor (props) {
    super(props);
    this.state = {selectedIndex: 0};
    this.render = this.render.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick (e) {
    e.preventDefault();
    this.setState({selectedIndex: e.target.value});
  }
  render () {
    return (
      <div>
        <ul>
          {this.props.panes.map((pane, idx) => {
            let klass = idx == this.state.selectedIndex ? "selected-pane" : "";
            return <li className={klass} value={idx}>{pane.title}</li>
          })}
        </ul>
        <p>{this.props.panes[this.state.selectedIndex].content}</p>
      </div>
    )
  }
}