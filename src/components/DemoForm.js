import React, { Component } from 'react'

class DemoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            language: 'flutter'
        }
    }

    handleUserName = e => {
        this.setState({
            username: e.target.value
        })
    }

    handleLanguage = e => {
        this.setState({
            language: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(`Name - ${this.state.username}, Language - ${this.state.language}`)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="username">Username </label>
                    <input type="text" id="username" value={this.state.username} onChange={this.handleUserName} />
                </div>
                <br />
                <div>
                    <label htmlFor="language">Language </label>
                    <select id="language" value={this.state.language} onChange={this.handleLanguage}>
                        <option value="react">React</option>
                        <option value="reactnative">React Native</option>
                        <option value="flutter">Flutter</option>
                        <option value="swift">Swift</option>
                        <option value="python">Python</option>
                    </select>
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default DemoForm
