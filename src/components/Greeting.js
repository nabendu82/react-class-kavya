const Greeting = (props) => {
    const { name, type, children } = props;
    
    return (
        <>
            <h2>{name} is a {type} programming language</h2>
            <h3>{children}</h3>
        </>
    )
}

export default Greeting