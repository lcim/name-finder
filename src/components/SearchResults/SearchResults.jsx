import NewCard from "../NewCards/NewCard";
import "./searchResults.css";

const SearchBox = ({ suggestedNames, keyWord }) => {

  const instructions = (
    <p className="instructions">
      When you type your keyword, matching names will show here; click on any of
      it to open the page on a new tab.
    </p>
  );

  const content = suggestedNames.map((result) => {
    return <NewCard key={result} result={result} />;
  });
  return (
    <div
      className={`results__container ${
        keyWord.length > 0 ? "with-background" : "without-background"
      }`}
    >
      {keyWord.length === 0 && instructions}
      {content.slice(0, 20)}
    </div>
  );
};

export default SearchBox;
