import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
  
const  Application = ()=> {
    
      

    const { count } = useSelector((state)=> state.count);

    const countDispatch = useDispatch();



    const handleIncrement = () => {
        countDispatch({type: 'INCREMENT',count:1});

    }
    return (
            <div>

               <button onClick={handleIncrement} className="btn btn-info">Plus</button>

                   
                  <span style={{padding:'40px'}}>count: {count}</span> 
            
            </div>
    );
}
export default Application;
