import React from "react";
import { chat } from "../Firebase/firebase";

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      chats: [],
      content: "",
      readError: null,
      writeError: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    console.log(JSON.parse(localStorage.getItem("currentUser")));
    this.setState({
      readError: null,
      user: JSON.parse(localStorage.getItem("currentUser")),
    });
    try {
      chat.ref("chats").on("value", (snapshot) => {
        let chats = [];
        snapshot.forEach((snap) => {
          chats.push(snap.val());
        });
        this.setState({ chats });
      });
    } catch (error) {
      this.setState({ readError: error.message });
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ writeError: null });
    try {
      await chat.ref("chats").push({
        content: this.state.content,
        timestamp: Date.now(),
        uid: this.state.user.uid,
      });
      this.setState({ content: "" });
    } catch (error) {
      this.setState({ writeError: error.message });
    }
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value,
    });
  };
  render() {
    const { chats, user, writeError, readError } = this.state;
    console.log(chats);
    return (
      <div>
        <div className="chats">
          {chats.map((chat) => {
            return (
              <p
                key={chat.timestamp}
                className={
                  "chat-bubble " +
                  (this.state.user.uid === chat.uid ? "current-user" : "")
                }
              >
                {chat.content}
              </p>
            );
          })}
        </div>
        <div className="text-messenger">
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              value={this.state.content}
            ></input>
            {this.state.error ? <p>{this.state.writeError}</p> : null}
            <button type="submit">Send</button>
          </form>
          <div></div>
          <div>
            Logged in as: <strong>{user.email}</strong>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
