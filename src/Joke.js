import React from 'react';

const Joke = props =>{
    return(
        <div>
            <h3 style={{display : props.question? "block":"none", color: !props.punchline? 'orange':'blue'}}>Question:{props.question}</h3>
            <h3 style={{display: props.punchline? "block":"none", color: !props.question? 'grey':'red'}}>Answer:{props.punchline}</h3>
            <hr/>
        </div>
    )
}



export default Joke;