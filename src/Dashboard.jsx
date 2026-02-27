import {useNavigate} from "react-router-dom"
function Dashboard (){
    const navigate = useNavigate();
    const irASer = () => {
        navigate("/servicios");
    }
    return(
        <div>
            <h1>Dashboard</h1>
            <button onClick={irASer}>Ir a Servicios</button>
        </div>
    )
}

export default Dashboard  