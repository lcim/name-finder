import NewCard from "../NewCards/NewCard";
import "./searchResults.css";

const SearchBox = ({ suggestedNames, keyWord }) => {
  const content = suggestedNames.map((result) => {
    return <NewCard key={result} result={result} />;
  });
  return (
    <div
      className={`results__container ${
        keyWord.length > 0 ? "with-background" : "without-background"
      }`}
    >
      {content.slice(0, 20)}
    </div>
  );
};

export default SearchBox;
