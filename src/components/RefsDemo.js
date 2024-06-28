import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.userRef = React.createRef()
        this.langRef = React.createRef()
    }

    componentDidMount(){
        this.userRef.current.focus()
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(`Name - ${this.userRef.current.value}, Language - ${this.langRef.current.value}`)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="username">Username </label>
                    <input type="text" id="username" ref={this.userRef} />
                </div>
                <br />
                <div>
                    <label htmlFor="language">Language </label>
                    <input type="text" id="language" ref={this.langRef} />
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default RefsDemo
