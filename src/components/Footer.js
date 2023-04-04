import Nav from "./Nav"

function Footer(props) {
    return (
        <footer>
            <Nav id="bottomMenu" ulProps={["Home", "Women's", "Men's", "On the Street", "The Catwalk", "AdWatch", "About", "Tips"]}/>
        <h4 id="copyright">&copy; 2013 Valet Industries, Inc.</h4>
    </footer>
    )
}

export default Footer