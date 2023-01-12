import { Link } from 'react-router-dom';
const Categorias = () => {
    return (
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <button className="botonesNavBar"><Link className='nav-link' to={"/categoria/celulares"}>Celulares</Link></button>
            <button className="botonesNavBar"><Link className='nav-link' to={"/categoria/consolas"}>Consolas</Link></button>
            <button className="botonesNavBar"><Link className='nav-link' to={"/categoria/televisores"}>Televisores</Link></button>
            </div>
        </div>
    );
}

export default Categorias;
