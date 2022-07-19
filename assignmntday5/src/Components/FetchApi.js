import React, { useState,useEffect } from 'react';


export default function FetchApi() {

    const [items, setItems] = useState([]);

  
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(
            (result) => {
            setItems(result);
            } 
        )
        
    }, [])
    
   return (
      <div>
        {items.map(item => (
                <p key={item.id}>
                    {item.name}
                </p>
            ))
        }
      </div>
    );
  }

  
