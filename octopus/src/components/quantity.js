import React from 'react';

const {useState} = React;

function Quantity() {
    const[count,setCount] = useState(0);

return(
    
        <div className="button__wrapper">
            <button onClick={()=>setCount(count-1)}>-</button>
            <h4 id="quantity-counter">{count}</h4>
            <button onClick={()=>setCount(count+1)}>+</button>
        </div>
    
    );
};

export default Quantity;