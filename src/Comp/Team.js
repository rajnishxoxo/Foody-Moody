import React from "react";

class Team extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "DummyName",
        location: "default",
        url: "default",
      },
    };
  }

  async componentDidMount() {
    const getDetail = await fetch("https://api.github.com/users/rajnishxoxo");
    const json = await getDetail.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url, html_url } = this.state.userInfo;
    return (
      <div className="person-div">
        <img className="image" src={avatar_url} />
        <h3>{name}</h3>
        <a>{html_url}</a>
      </div>
    );
  }
}

export default Team;
