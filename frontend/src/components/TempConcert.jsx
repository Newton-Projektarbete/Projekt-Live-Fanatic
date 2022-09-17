import { Component } from "react";

export class TempConcert extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
        }
    }

    increaseOne() {
        this.state.counter = this.state.counter + 1;
    }

    render() {
        return <div className="body">
            <p>Count: {this.state.counter}</p>
            <button onClick={()=> this.increaseOne()}>Click</button>
        </div>
    }
}
