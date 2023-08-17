import Logo from "./Logo";
import Nav from "./Nav";
import Menu from "./Menu";
import UserAccount from "./UserAccount";
import SearchBar from "./SearchBar";

const Header = (props) => {
  return (
    <header>
      <div className="container">
        <div className="header-data">
          <Logo />
          <SearchBar /> 
          <Nav />
          <Menu /> 
          <UserAccount user={props.user}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
