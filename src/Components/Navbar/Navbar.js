import React from 'react';
import { connect } from 'react-redux';
import './Navbar.css';

import { Dropdown } from 'semantic-ui-react';

import * as YoutubeActions from '../../Actions/YoutubeActions';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = { query: '' };
  }

  handleChange = ({ target }) => {
    this.setState({ query: target.value });
  }

  onSearch = () => {
    this.props.dispatch(YoutubeActions.next(this.state.query));
  }

  render() {
    const trigger = (
      <span>
        <i className="large user circle outline icon" size="big" /> {this.props.user.name}
      </span>
    )

    return (
      <nav id="Navbar">
        <div className="content">
          <div className="ui inverted left icon input">
            <input type="text" placeholder="Search..." onChange={this.handleChange}/>
            <i className="search icon" />
            <button className="ui button" onClick={this.onSearch}>Search</button>
          </div>
          <Dropdown trigger={trigger} pointing>
            <Dropdown.Menu>
              <Dropdown.Item
                text="Settings" icon="settings" />
              <Dropdown.Item
                text="Sign out" icon="sign out" />
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
    )
  }
}

export default connect(store => {
  return {
    youtube: store.youtube,
  }
})(Navbar);
