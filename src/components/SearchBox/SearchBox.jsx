import "./searchBox.css";

const SearchBox = ({ handleKeyWord }) => {
  return (
    <div className="searchBox__container">
      <input
        type="text"
        placeholder="Enter your keyword/name"
        onChange={(e) => handleKeyWord(e.target.value)}
        className="keyword"
      />
    </div>
  );
};

export default SearchBox;
