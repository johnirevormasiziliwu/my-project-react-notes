import React from "react";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  handleSearchChange(event) {
    const searchQuery = event.target.value;
    this.props.onSearchChange(searchQuery);
  }
  render() {
    return (
      <div className="notes-navbar bg-orange-600 h-16 flex items-center  ">
        <div className="flex md:justify-between  ml-5 items-center  w-full  ">
          <h3 className="md:ml-32   text-2xl font-semibold me-6 text-white capitalize">
            Notes
          </h3>
          <input
            className="md:mr-32 ms-7 md:w-96 h-10 rounded-md focus:outline-none focus:border-none p-3"
            type="search"
            name="search"
            id="search"
            onChange={this.handleSearchChange}
            placeholder="Search..."
          />
        </div>
      </div>
    );
  }
}

export default Navbar;
