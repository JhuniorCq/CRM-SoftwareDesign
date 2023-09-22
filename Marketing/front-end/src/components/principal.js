
import { Link } from 'react-router-dom';

const paginaPrincipal =  () => {

    return(

        <div>
            <Link to={`/gestion`}>
                <button>GESTION</button>
            </Link>
            
            <Link to={`/calendario`}>
                <button>CALENDARIO</button>
            </Link>

        </div>

    );
}

export default paginaPrincipal;