// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Users = () => {
    const navigate = useNavigate();
    
    const [data, setData] = useState([]);

    useEffect(() => {
        // Realiza la solicitud GET al servidor
        axios
            .get("http://localhost:3000/users")
            .then((response) => {
                // Si la solicitud es exitosa, accede a los datos devueltos por el servidor
                setData(response.data);
            })
            .catch((error) => {
                // Si hay algún error en la solicitud, puedes manejarlo aquí
                console.error("Error al hacer la solicitud:", error);
            });
    }, [data]);

    const deleteUser = (userId) => {
        axios
            .delete(`http://localhost:3000/users/${userId}`)
            .then((response) => {
                console.log("Respuesta del servidor:", response.data);
                alert("Usuario Eliminado");
            })
            .catch((error) => {
                console.error("Error al enviar la petición:", error);
            });
    };

    const focusUser = (userId) => {
        navigate(`/user/${userId}`);
    }

    return (
        <div>
            {/* Renderizar los datos obtenidos del servidor */}
            <ul className="ul">
                {data.map((item) => (
                    <li className="li" key={item._id}>
                        <strong className="li-strong">Nombre:</strong>{" "}
                        {item.name} <br />
                        <strong className="li-strong">Rol:</strong> {item.rol}{" "}
                        <br />
                        <strong className="li-strong">Email:</strong>{" "}
                        {item.email} <br />
                        <strong className="li-strong">
                            Nombre de Usuario: @
                        </strong>{" "}
                        {item.username} <br />
                        <strong className="li-strong">ID:</strong> {item._id}{" "}
                        <br />
                        <Button
                            className="pequeño"
                            onClick={() => deleteUser(item._id)}
                        >
                            Eliminar
                        </Button>
                        <Button
                            className="pequeño verde"
                            onClick={() => focusUser(item._id)}
                        >
                            Toda la Información
                        </Button>
                    </li>
                ))}
            </ul>
            <Link to="/">
                <button>Regresar a home</button>
            </Link>
        </div>
    );
};

export default Users;
