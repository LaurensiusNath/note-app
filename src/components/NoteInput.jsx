import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      title: "",
      body: "",
      charRemaining: 50,
    };

    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    const newTitle = event.target.value;
    if (newTitle.length <= 50) {
      this.setState(() => {
        return {
          title: newTitle,
          charRemaining: 50 - newTitle.length,
        };
      });
    }
  }

  onBodyChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addNote({
      title: this.state.title,
      body: this.state.body,
    });

    this.setState({
      title: "",
      body: "",
      charRemaining: 50,
    });
  }

  render() {
    return (
      <div className="note-input">
        <h2 className="note-input__title">Buat Catatan</h2>
        <p className="note-input__title__char-limit">
          Sisa karakter: {this.state.charRemaining}
        </p>
        <form action="" onSubmit={this.onSubmitHandler}>
          <input
            type="text"
            className="note-input__title"
            onChange={this.onTitleChangeHandler}
            placeholder="Ini adalah judul"
            value={this.state.title}
            maxLength={50}
          />
          <textarea
            className="note-input__body"
            onChange={this.onBodyChangeHandler}
            placeholder="Tuliskan catatan disini"
            value={this.state.body}
          />
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
