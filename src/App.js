import './App.css';
import { useEffect, useState } from 'react';
import Characters from './components/Characters'
function App() {
  const[characterList, setCharacterList ] = useState([])
  const[next, setNext] = useState(1)
  useEffect(()=>{
    fetch(`https://rickandmortyapi.com/api/character?page=${next}`)//colocar o endereço que vai buscar os nossos dados
    //endpoint: endereço que vai ser pego o json 
    //promisses: promessa
    .then((response)=> response.json())
    .then((response)=>setCharacterList(response.results))
    .catch((err)=>console.log(err))
  },[next])

  const previousNext = () =>{
    if(next > 1){
      setNext(next-1)
    }
}

  const proximo = () =>{
    if(next < 34){
      setNext(next+1)
    }
}

  

  
  return (
    <div className="App">
      <header className="App-header">
      <h1>Página {next}</h1>
      <span>Meus personagens</span>
      <button className="btn" onClick={proximo}>Próxima</button>
      <button className="btn" onClick={previousNext}>Voltar</button>
        <Characters characterList={characterList}/>
      </header>

    </div>
  );
}

export default App;