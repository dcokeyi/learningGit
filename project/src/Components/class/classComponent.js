import React from "react"

class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
        // Binding
        this.handleClick = this.handleClick.bind(this)
    }
    //
    handleClick() {
        // Changing the state
        this.setState({ count: this.state.count + 1 })
    }

    handleMove() {
        console.log("on the movw")
    }

    render() {
        return (
            <div>
                <h1>Learning Class Component</h1>
                <p>Current count is {this.state.count}</p>
                <button onClick={this.handleClick}>Increase count</button>
                <button onClick={this.handleMove}>Testing</button>
            </div>
        )
    }
}

export default Welcome