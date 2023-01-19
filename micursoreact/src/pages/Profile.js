import { useParams } from "react-router-dom";

export default function Profile(){
    //Debemos añadir el nombre como slug en al ruta
     const { name } = useParams();
    return (
        <div>
            <h1>
                Profile del señor {name}
            </h1>
        </div>
    );
}