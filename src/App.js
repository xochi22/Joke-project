import React from 'react';
import Joke from './Joke';
import jokeData from './JokeData';


const App = () =>{

    const jokes = jokeData.map(joke => {
          return <Joke question={joke.question} punchline={joke.punchLine} key={joke.id}/>
          })
    return(
        <div>
          {jokes}
        </div>
    )
}



export default App;