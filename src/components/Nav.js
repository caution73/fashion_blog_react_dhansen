function Nav(props){
    return(
        <nav aria-label="Main Navigation" role="navigation">
            <ul id={props.id}>
                {props.ulProps.map((item) => {
                return (
                    <li><a>{item}</a></li>
                )
            })
            }
            </ul>
        </nav>
    )
}


export default Nav