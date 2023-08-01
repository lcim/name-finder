import "./newCard.css";

const NewCard = ({ result }) => {
  const domain = "https://www.domain.com/registration/?flow=domainDFE&search=";
  return (
    <a
      className="page__link"
      target="_blank"
      rel="noreferrer"
      href={`${domain}${result}`}
    >
      <div className="result__container">{result}</div>
    </a>
  );
};

export default NewCard;
