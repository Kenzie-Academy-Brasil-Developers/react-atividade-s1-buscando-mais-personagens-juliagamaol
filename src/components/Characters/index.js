import CharCard from "../CharCard"
import './styles.css'
const Characters = ({characterList}) =>{
        return(
           <div className="Personagens">
                {characterList.map((character)=>{
                    return <CharCard key={character.id} character={character}/>
                    
                })}
           </div>
        )
} 

export default Characters