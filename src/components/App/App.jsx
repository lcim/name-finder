import "./app.css";
import Header from "../Header/Header";
import React from "react";
import SearchBox from "../SearchBox/SearchBox";
import SearchResults from "../SearchResults/SearchResults";
import name from "@rstacruz/startup-name-generator";

// I used functional component using useState hook in place of class in version 2 (see bottom of the page). This is why I was asking questions about version control.
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


// Using functional component for the same App

/* 
export default function App() {

  const[headerText, setHeaderText] = useState('Domain Searcher')
  const[keyWord, setKeyWord] = useState("")
  const[suggestedNames, setSuggestedNames] = useState([])
  
  const handleKeyWord = (inputText) => {
    setHeaderText("Domain Searcher")
    setKeyWord(inputText)
    setSuggestedNames ( inputText ? name(inputText) : []
    );
  };

    return (
      <div className="App">
        <Header
          headerText={headerText}
          keyWord={keyWord}
        />
        <SearchBox handleKeyWord={handleKeyWord} />
        <SearchResults
          keyWord={keyWord}
          suggestedNames={suggestedNames}
        />
      </div>
    );
  }
*/