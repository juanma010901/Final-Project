// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const User = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const { userId } = useParams();

    useEffect(() => {
        // Realiza la solicitud GET al servidor
        axios
            .get("https://final-project-05vk.onrender.com/users")
            .then((response) => {
                // Si la solicitud es exitosa, accede a los datos devueltos por el servidor
                setUsers(response.data);
            })
            .catch((error) => {
                // Si hay algún error en la solicitud, puedes manejarlo aquí
                console.error("Error al hacer la solicitud:", error);
            });
    }, []);

    useEffect(() => {
        // console.log(userId)
        // Filtrar el usuario por el ID recibido desde la URL
        const foundUser = users.find((user) => user._id === (userId));
    
        // Actualizar el estado con el usuario encontrado
        setUser(foundUser);
    }, [users, userId]);

    return (
        <div>
            <div>
                {user ? (
                    <li className="li no-bullet">
                        <strong className="li-strong">Nombres:</strong> {user.name} <br />
                        <strong className="li-strong">Apellidos:</strong> {user.lastname} <br />
                        <strong className="li-strong">DNI:</strong> {user.DNI} <br />
                        <strong className="li-strong">Fecha de Nacimiento:</strong> {user.birthdate} <br />
                        <strong className="li-strong">Rol:</strong> {user.rol} <br />
                        <strong className="li-strong">Teléfono:</strong> {user.phone} <br />
                        <strong className="li-strong">Email:</strong> {user.email} <br />
                        <strong className="li-strong">Nombre de Usuario: @</strong> {user.username} <br />
                        <strong className="li-strong">ID:</strong> {user._id} <br />
                    </li>
                ) : (
                    <p>No se encontró el usuario con el ID especificado.</p>
                )}
            </div>
            <Link to="/">
                <button>Regresar a home</button>
            </Link>
            <Link to="/users">
                <button>Listado de usuarios</button>
            </Link>
        </div>
    );
};

export default User;
