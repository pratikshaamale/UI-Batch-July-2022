import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


  
const  SecondApplication = ()=> {


    const { count } = useSelector((state)=> state.count);

    const countDispatch = useDispatch();



   const handleDecrement = () => {
        countDispatch({type: 'DECREMENT',count:1});
    }
    const isLessthanZero = count<=0;
 
    return (
        <div>
            <div>
                <button onClick={handleDecrement} className="btn btn-warning"  disabled={isLessthanZero}
>Minus</button>
            </div>
        </div>
    );
}
export default SecondApplication;
