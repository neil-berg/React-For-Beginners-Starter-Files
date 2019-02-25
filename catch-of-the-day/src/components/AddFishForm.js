import React from 'react';

class AddFishForm extends React.Component {
  state = {
    name: '',
    price: '',
    status: '',
    desc: '',
    image: ''
  };

  onInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    // this.setState(() =>
    //   name === 'price' ? { [name]: parseFloat(value) } : { [name]: value }
    // );
    this.setState(
      name === 'price' ? { [name]: parseFloat(value) } : { [name]: value }
    );
  };

  createFish = e => {
    e.preventDefault();
    const fish = this.state;
    this.props.addFish(fish);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={this.onInputChange}
        />
        <input
          name="price"
          type="text"
          placeholder="Price"
          value={this.state.price}
          onChange={this.onInputChange}
        />
        <select name="status" onChange={this.onInputChange}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          type="text"
          placeholder="Desc"
          value={this.state.desc}
          onChange={this.onInputChange}
        />
        <input
          name="image"
          type="text"
          placeholder="Image"
          value={this.state.image}
          onChange={this.onInputChange}
        />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
