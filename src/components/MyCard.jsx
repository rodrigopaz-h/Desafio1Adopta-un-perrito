import { Tag } from "./Tags"
export const MyCard = ({id, img, nombre, descripcion, Tags}) =>{
    return (
        <>
        <div>
            <img src={img} alt="Imagen de perro" />
            <strong>{nombre}</strong>
            <p>{descripcion}</p>
        </div>
        </>
    )
}




