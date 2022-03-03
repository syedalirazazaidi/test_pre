import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    // imageUrl:'https://picsum.photos/200'
  };
  format() {
    const { count } = this.state;
    return count === 1 ? "zero" : count;
  }
   getBadgeClasses() {
    let classes = "badge m-2 p-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
}
  render() {
    
     
    return (
      <div>
       <span className={this.getBadgeClasses}> {this.format()}</span>
        <button type="button" class="btn btn-primary">
          Increment
        </button>
      </div>
    );

     
  }
}

export default Counter;
// import React from 'react'

// function Counter() {
//     const [state,setState]=React.useState({
//         count:0,
//         pic:'https://picsum.photos/200'
//     })
//     const styles={
//         fontWeight:'200'
//     }
//     const newFormat=()=>{
//         const {count}=state
//        return count===0?'zero':count
//     }
//   return (
//     <div>
//         <img src={state.pic}/>
//         <span className="btn btn-success m-3 p-2">

//        <p style={styles}> {state.count}</p>
//         </span>
//         </div>
//   )
// }

// export default Counter
