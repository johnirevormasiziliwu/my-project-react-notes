import React from "react";

class FormInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      maxLength: '50'
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSumbitChangeEventHandler =
      this.onSumbitChangeEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }
  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSumbitChangeEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    const { title } = this.state;
    
    return (
      <div className="notes-form-input mt-3 px-5  ">
        <h1 className="text-center py-3 text-2xl font-semibold">
          Buat Catatan
        </h1>

        <div className="form border-2 border-orange-600 rounded-md bg-white shadow md:h-[370px] md:w-[600px] w-full  mx-auto py-5 px-3">
          <form onSubmit={this.onSumbitChangeEventHandler}>
            <div className="mb-3">
              <div className="flex justify-between">
                <label htmlFor="title" className="text-lg font-semibold">
                  Judul Catatan
                </label>
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Sisa karakter: {title.length}/{this.state.maxLength}
                </p>
              </div>
              <input
                type="text"
                name="title"
                id="title"
                value={this.state.title}
                onChange={this.onTitleChangeEventHandler}
                className="w-full bg-white rounded-md border  font-bold border-gray-300 shadow mt-1 h-10 focus:outline-none focus:border-none px-3"
                placeholder="Tuliskan title notes disini..."
                maxLength={this.state.maxLength}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="body" className="text-lg font-semibold">
                Catatan
              </label>
              <textarea
                name="body"
                id="body"
                cols="30"
                rows="5"
                value={this.state.body}
                onChange={this.onBodyChangeEventHandler}
                className="w-full bg-white rounded-md border border-gray-300 shadow mt-1 focus:outline-none focus:border-none px-3 py-3"
                placeholder="Tuliskan body disini..."
              ></textarea>
            </div>
            <div className="button">
              <button
                type="submit"
                className="w-full bg-orange-600 text-white text-lg font-semibold h-10 rounded-md"
              >
                Simpan Catatan
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FormInput;
