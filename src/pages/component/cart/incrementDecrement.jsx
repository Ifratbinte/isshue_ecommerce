import React, { Component } from 'react'

class IncrementDecrement extends Component {
    state ={
        count : 0
    }

    incrementCount = () => {
        this.setState({
            count : this.state.count + 1
        })
    }
    decrementCount = () => {
        if(this.state.count > 0) {
            this.setState({
                count : this.state.count - 1
            })
        }
    }
  render() {
    return (
    
        <ul className='d-flex align-items-center justify-content-center'>
            <li className="entry value-minus" onClick={this.decrementCount}><i className="fa fa-minus" aria-hidden="true"></i></li>
            <li className="entry"><span>{this.state.count}</span></li>
            <li className="entry value-plus active" onClick={this.incrementCount}><i className="fa fa-plus" aria-hidden="true"></i></li>
        </ul>    
       
    )
  }
}
export default IncrementDecrement;