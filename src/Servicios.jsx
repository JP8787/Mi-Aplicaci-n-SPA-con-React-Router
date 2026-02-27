import  {useNavigate} from "react-router-dom"  
function Servicios() {
    const navigate = useNavigate();
    const irDash = () => {
        navigate("/");
    }
    return (
    <div>
        <h1>Servicios</h1>
        <button onClick={irDash}>Ir a Dashboard</button>
    </div>
    )
}
export default Servicios