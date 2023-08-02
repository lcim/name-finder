import "./searchBox.css";
import {debounce} from 'lodash';

const SearchBox = ({ handleKeyWord }) => {
  
  const delayedFeedback = debounce((userInput) => {
    handleKeyWord(userInput)
  }, 1000)

  return (
    <div className="searchBox__container">
      <input
        type="text"
        placeholder="Enter your keyword/name"
        onChange={(e) => delayedFeedback(e.target.value)}
        className="keyword"
      />
    </div>
  );
};
export default SearchBox;
