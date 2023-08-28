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
      <div className="w-70 mx-auto h-auto">
        <img className="w-40 h-[20%] rounded-full" src={avatar_url} />
        <h3 className="text-xl leading-7 tracking-tighter text-opacity-92 text-blue-900 mb-4">{name}</h3>
        <a className="text-l">{html_url}</a>
      </div>
    );
  }
}

export default Team;
