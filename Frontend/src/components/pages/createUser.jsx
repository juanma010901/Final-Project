/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


function CreateUser() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [DNI, setDNI] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [rol, setRol] = useState();
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const navigate = useNavigate();

    const createUser = () => {
        axios.post(
            "https://final-project-05vk.onrender.com/users",
            {
                name: name,
                last_name: lastName,
                DNI: DNI,
                birthdate: birthdate,
                rol: rol,
                phone: phone,
                email: email,
                password: password,
                username: username,
            })
            .then((response) => {
                console.log("Respuesta del servidor:", response.data);
                console.log(response.data._id);
                navigate(`/user/${response.data._id}`);
            })
            .catch((error) => {
                console.error("Error al enviar la petición:", error);
            });
        alert("Usuario creado");
    };
    return (
        <Container>
            <div>
                <Link to="/users">
                    <button>Verificar la lista de usuarios</button>
                </Link>
                <Link to="/">
                    <button>Regresar a home</button>
                </Link>
            </div>

            <Form.Label htmlFor="name">Nombres *</Form.Label>
            <Form.Control
                required
                placeholder="Nombres"
                type="text"
                id="name"
                onChange={(event) => setName(event.target.value)}
            />
            <Form.Label htmlFor="last_name">Apellidos</Form.Label>
            <Form.Control
                placeholder="Apellidos"
                type="text"
                id="last_name"
                onChange={(event) => setLastName(event.target.value)}
            />
            <Form.Label htmlFor="DNI">DNI</Form.Label>
            <Form.Control
                placeholder="DNI"
                type="number"
                id="DNI"
                onChange={(event) => setDNI(event.target.value)}
            />
            <Form.Label htmlFor="date">Fecha de Nacimiento *</Form.Label>
            <Form.Control
                placeholder="Fecha de Nacimiento"
                type="date"
                id="birthdate"
                onChange={(event) => setBirthdate(event.target.value)}
            />

            <Form.Label htmlFor="rol">Rol *</Form.Label>
            <Form.Select
                id="rol"
                onChange={(event) => setRol(event.target.value)}
                defaultValue="default" // Agrega un valor predeterminado
            >
                <option disabled>Selecciona un Rol</option>
                <option value="Administrador">Administrador</option>
                <option value="Empleado">Empleado</option>
                <option value="Cliente">Cliente</option>
            </Form.Select>

            <Form.Label htmlFor="phone">Número de Teléfono</Form.Label>
            <Form.Control
                placeholder="Número de Teléfono"
                type="number"
                id="phone"
                onChange={(event) => setPhone(event.target.value)}
            />
            <Form.Label htmlFor="email">Email *</Form.Label>
            <Form.Control
                placeholder="Email"
                type="email"
                id="email"
                onChange={(event) => setEmail(event.target.value)}
            />
            <Form.Label htmlFor="userName">Nombre de Usuario *</Form.Label>
            <Form.Control
                placeholder="Nombre de Usuario"
                type="text"
                id="userName"
                onChange={(event) => setUsername(event.target.value)}
            />
            <Form.Label htmlFor="password">Contraseña *</Form.Label>
            <Form.Control
                placeholder="Contraseña"
                type="password"
                id="password"
                onChange={(event) => setPassword(event.target.value)}
            />

            <Button onClick={createUser}>Crear Usuario</Button>
        </Container>
    );
}

export default CreateUser;
