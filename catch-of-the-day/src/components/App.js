import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
    loading: true
  };

  componentDidMount() {
    const { params } = this.props.match;
    // Reinstate localeStorage
    const localStorageRef = localStorage.getItem(params.storeID);
    if (localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef)
      });
    }
    this.ref = base.syncState(`${params.storeID}/fishes`, {
      context: this,
      state: 'fishes',
      then() {
        this.setState({ loading: false });
      }
    });
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeID,
      JSON.stringify(this.state.order)
    );
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = fish => {
    // 1. Take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // 2. Add new fish to fishes
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set new fishes object to state
    this.setState({
      fishes: fishes
    });
  };

  updateFish = (key, updatedFish) => {
    const fishes = { ...this.state.fishes };
    fishes[key] = updatedFish;
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          fishes={this.state.fishes}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
