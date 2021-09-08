import './styles.css'
const CharCard = ({character:{name,image,status}}) =>{
    return(
        <div className="card" id={status}>
            <label>{name}</label>
            <img src={image} alt="{name}" className="picture"></img>
        </div>
    )
}

export default CharCard