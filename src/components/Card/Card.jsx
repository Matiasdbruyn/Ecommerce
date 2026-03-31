import "./Card.css"

function Card({imagen, children}) {
    return (
        <div className="card-container">
            <img src={imagen} alt="" />
            <div className="card-content">
                {!children?"No hay contenido para mostrar":children}
            </div>
        </div>
    )
}

export default Card