import Nav from "./Nav.js"

function Header(props) {
    return (
    <header>
        <h1>Sartre's List</h1>
        <h2>Better-Dressed People</h2>
        <Nav id="topMenu" ulProps={["Women's", "Men's", "On the Street", "The Catwalk", "AdWatch", "About"]}/>
    </header>
    );
  }
  
  export default Header;
  