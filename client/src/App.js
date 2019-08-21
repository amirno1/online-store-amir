import React from "react";

class App extends React.Component {
  componentDidMount() {
    fetch("http://localhost:5000/products/3")
      .then(res => res.json())
      .then(data => console.log(data));
  }
  render() {
    return <div>Hi</div>;
  }
}

export default App;
