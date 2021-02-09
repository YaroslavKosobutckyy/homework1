import React from 'react';



function User (props) {
    const {DataA} = props
    
    return (
        <div>
            
            {body}
                <h1>{DataA.firsName}</h1>      
                <h2>{DataA.lastName}</h2>
                <p>{DataA.age}</p>
                <p>{DataA.adress}</p>
                <p>{DataA.mob}</p>
        </div>
    );
}

export default Article