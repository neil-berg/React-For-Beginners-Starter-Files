import React from 'react';
import { Redirect } from 'react-router-dom';
import { slugify } from '../helpers';

class StorePicker extends React.Component {
  state = {
    storeName: '',
    slug: '',
    toStorePage: false
  };

  handleStoreName = e => {
    this.setState({
      storeName: e.target.value
    });
  };

  goToStore = e => {
    e.preventDefault();
    this.setState({
      slug: slugify(this.state.storeName),
      toStorePage: true
    });
  };

  render() {
    if (this.state.toStorePage) {
      return <Redirect push to={`/store/${this.state.slug}`} />;
    }
    return (
      <React.Fragment>
        <form action="" className="store-selector" onSubmit={this.goToStore}>
          <h2>Please enter a store</h2>
          <input
            type="text"
            required
            placeholder="Store Name"
            value={this.state.value}
            onChange={this.handleStoreName}
          />
          <button type="submit">Visit Store -></button>
        </form>
      </React.Fragment>
    );
  }
}

export default StorePicker;
