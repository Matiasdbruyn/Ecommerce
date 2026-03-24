import "./Card.css"

function Card(props) {
    console.log(props)
    return (
        <div className="card-container">
            <h3>aca tiene que ir la imagen, no h3</h3>
            <div className="card-content">
                {!props.children?"No hay contenido para mostrar":props.children}
            </div>
        </div>
    )
}

export default Card