import React from 'react';
import { Redirect } from 'react-router-dom';
// import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  state = { storeName: '', slug: '', toStorePage: false };

  handleStoreName = e => {
    this.setState({
      storeName: e.target.value
    });
  };

  goToStore = e => {
    e.preventDefault();
    this.setState(() => ({
      slug: this.state.storeName.split(' ').join('-'),
      toStorePage: true
    }));
    // const storeName = this.myInput.current.value;
  };

  render() {
    if (this.state.toStorePage) {
      return <Redirect push to={`/store/${this.state.slug}`} />;
    }
    return (
      <React.Fragment>
        <form
          action=""
          className="store-selector"
          onSubmit={this.goToStore}
          onChange={this.handleStoreName}
        >
          <h2>Please enter a store</h2>
          <input
            type="text"
            // ref={this.myInput}
            required
            placeholder="Store Name"
            value={this.state.value}
            // defaultValue={getFunName()}
          />
          <button type="submit">Visit Store -></button>
        </form>
      </React.Fragment>
    );
  }
}

export default StorePicker;
