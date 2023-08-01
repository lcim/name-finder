import "./header.css";

const Header = ({ headerText, keyWord }) => {
  const image = (
    <img
      src="https://github.com/lcim/vite-test/assets/8688347/5abd6914-8695-495f-a361-5eb82ad4d7fb"
      alt="Header-representation"
      className="header__image"
    />
  );
  return (
    <div className="header__container"> 
      <p className={ `header__image header__image${keyWord.length > 0 ? "-contracted" : "-expanded"}` } >{image}</p>
      <h1 className={`header__text header__text${keyWord.length > 0 ? "-contracted" : "-expanded"}` } >{headerText}</h1>
    </div>
  );
};

export default Header;
