import './User.css'

const h1Styled = {
    backgroundColor: 'green',
    padding: '5px',
    color: 'white'
}

const User = ({ user }) => {
    return (
        <div className='container'>
            <h1 style={h1Styled}>{user.id}</h1>
            <h2 style={{ color: 'red', fontSize: '16px' }}>{user.name}</h2>
            <h3>{user.username}</h3>
            <h3>{user.email}</h3>
        </div>
    )
}
export default User