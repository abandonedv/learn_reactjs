import React, {useState} from "react";

const Counter = function () {
    const [count, serCount] = useState(0);

    function increment() {
        serCount(count + 1);
        console.log("liked: " + count);
    }

    function decrement() {
        serCount(count - 1);
        console.log("disliked: " + count);
    }

    return(
        <div className="App">
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter;