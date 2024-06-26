const ChildComponent = (props) => {
    return (
        <div>
            <button onClick={() => props.greetHandler('Robin Hood Jr.')}>Greet Parent</button>
        </div>
    )
}
export default ChildComponent