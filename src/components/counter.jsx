import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,

    tags: [],
  };
  rendertage() {
    if (this.state.tags.length === 0) return <div>ther are no tags</div>;
    return this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
  }

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && <div>there are no tags</div>}
        <ul>{this.rendertage()}</ul>
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
