import { useParams } from "react-router-dom";
function ProyectoDetalle() {
    const { codigo } = useParams();
    return (
        <div>
            <h1>Proyecto Detalle</h1>
            <p>El codigo del proyecto es: {codigo}</p>
        </div>
    )
}
export default ProyectoDetalle   