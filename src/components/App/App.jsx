import "./app.css";
import Header from "../Header/Header";
import React from "react";
import SearchBox from "../SearchBox/SearchBox";
import SearchResults from "../SearchResults/SearchResults";
import name from "@rstacruz/startup-name-generator";

class App extends React.Component {
  state = {
    headerText: "Domain Search",
    keyWord: "",
    suggestedNames: []
  };

  handleKeyWord = (inputText) => {
    this.setState({
      keyWord: inputText,
      suggestedNames: inputText ? name(inputText) : []
    });
  };

  render() {
    return (
      <div className="App">
        <Header
          headerText={this.state.headerText}
          keyWord={this.state.keyWord}
        />
        <SearchBox handleKeyWord={this.handleKeyWord} />
        <SearchResults
          keyWord={this.state.keyWord}
          suggestedNames={this.state.suggestedNames}
        />
      </div>
    );
  }
}

export default App;
