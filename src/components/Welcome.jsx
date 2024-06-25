import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const { name, children } = this.props;
        
        return (
            <>
                <h2>{name}</h2>
                <h3>{children}</h3>
            </>
        )
    }
}

export default Welcome
