import React from "react";
import { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { USER_URL } from "../../config/config";
import { useForm } from "../../Hooks/useForm";
import DeleteUser from "../../Components/DeleteUser";
import axios from "axios";
import "./UserProfileEdit.css";
import { useHistory } from "react-router";

export default function UserProfileEdit() {
  const { loginUser, getAuthHeaders, getToken } =
    useAuthContext();
    const history = useHistory();

  // User Avatar update
  const [inputValue, setInputValue] = useState({});

  const handleAvatarChange = (e) => {
    const inputValue = e.target.files[0];
    setInputValue(inputValue);
  };

  const handleAvatarSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("username", loginUser.username);
    formData.append("avatar", inputValue);
    formData.append("author", loginUser._id);
    formData.append("role", loginUser.role);
    formData.append("_id", loginUser._id);

    const option = { headers: getAuthHeaders() };

    axios
      .put(USER_URL + loginUser.username + "/avatar_update", formData, option)
      .then((res) => {
        if (res === 400) {
          console.log(res);
        } else {
          alert("Imagen cambiada con exito");
          window.location.reload();
        }
      });
  };

  // User username & description update

  // TODO: Tengo que gestionar el update del usuario porque falta agregar la actualización de LoginUser
  const userFormInitialState = {
    username: loginUser.username,
    newUsername: loginUser.username,
    description: loginUser.description,
    id: loginUser._id,
  };

  const [userForm, handleUserFormInputChange] = useForm(userFormInitialState);

  const handleInfoSubmit = async (e) => {
    e.preventDefault();

    if (userForm.newUsername === loginUser.username) {
      const newUserForm = {
        username: userForm.username,
        newUsername: loginUser.username,
        description: userForm.description,
        id: loginUser._id,
      };

      console.log(newUserForm);

      const options = {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },

        body: JSON.stringify(newUserForm),
      };

      const response = await fetch(
        USER_URL + `${loginUser.username}/updateUsername`,
        options
      );

      const data = await response.json();

      if (response.status === 200) {
        console.log(data);
        alert("Descripción actualizada correctamente")
        // window.location.reload();
      } else if (response.status === 400) {
        alert("Error en la información");
      }
    } else if (userForm.description === "") {
      const newUserForm = {
        username: userForm.username,
        newUsername: userForm.newUsername,
        description: loginUser.description,
        id: loginUser._id,
      };

      console.log(loginUser);
      console.log(newUserForm);

      const options = {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },

        body: JSON.stringify(newUserForm),
      };

      const response = await fetch(
        USER_URL + `${loginUser.username}/updateUsername`,
        options
      );

      const data = await response.json();

      if (response.status === 200) {
        console.log(data);
        history.push(`/config/${options.body.username}`) 
      } else if (response.status === 400) {
        alert("Error en la información");
      }
    } else {
      const options = {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },

        body: JSON.stringify(userForm),
      };

      const response = await fetch(
        USER_URL + `${loginUser.username}/updateUsername`,
        options
      );

      const data = await response.json();

      if (response.status === 200) {
        console.log(data);
        history.push(`/config/${userForm.username}`)
      } else if (response.status === 400) {
        alert("Error en la información");
      }
    }
  };

  // Email change
  const emailInitialState = {
    email: loginUser.email,
    id: loginUser._id,
    newEmail: "",
    confirmationNewEmail: "",
  };
  const [emailForm, handleEmailFormInputChange] = useForm(emailInitialState);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (emailForm.newEmail === emailForm.confirmationNewEmail) {
      const options = {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },

        body: JSON.stringify(emailForm),
      };

      const response = await fetch(
        USER_URL + `${loginUser.username}/updateEmail`,
        options
      );
      const data = await response.json();

      if (response.status === 200) {
        console.log(data);
      } else if (response.status === 400) {
        alert("Error en la información");
      }
    } else {
      alert("¡Los Correos no son iguales!");
    }
  };

  // Password change
  const passwordInitialState = {
    id: loginUser._id,
    newPassword: "",
    newPasswordConfirmation: "",
  };
  const [passwordForm, handlePasswordFormInputChange] = useForm(passwordInitialState);

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    if ( passwordForm.newPassword !== passwordForm.newPasswordConfirmation) {
      alert("Las contraseñas no son iguales")
    } else if (passwordForm.newPassword === "") {
      alert("introduce una nueva contraseña")
    } else if (passwordForm.newPasswordConfirmation === "") {
      alert("Por favor, confirma tu contraseña")
    } else {

      const options = {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },

        body: JSON.stringify(passwordForm),
      }

      const response = await fetch(
        USER_URL + `${loginUser.username}/updatePassword`,
        options
      );
      const data = await response.json();

      if (response.status === 200) {
        console.log(data);
      } else if (response.status === 400) {
        alert("Error");
      }

    }

  };

  return (
    <div className="BackgroundForms">
      <div className="formAvatar backgroundHandler">
        <h1>Cambia tu avatar:</h1>
        <form onSubmit={handleAvatarSubmit} className="formHandler ">
          <img src={loginUser.avatar} alt="" className="imgContainer" />
          <input
            type="file"
            name="avatar"
            onInput={handleAvatarChange}
            className="imgInput"
          />
          <input type="submit" value="Sube la nueva foto" />
        </form>
      </div>

      <div className="formInfo backgroundHandler">
        <h2>Cambia tu usuario y descripción:</h2>
        <form onSubmit={handleInfoSubmit} className="formHandler ">
          <input
            onChange={handleUserFormInputChange}
            name="newUsername"
            type="text"
            className="textInput"
            placeholder="username"
          />
          <textarea
            onChange={handleUserFormInputChange}
            rows="10"
            cols="60"
            name="description"
            className="textInput"
            placeholder="Realiza una breve descripción para tu perfil"
          ></textarea>

          <input type="submit" value="Cambiar usuario y descripción" />
        </form>
      </div>

      <div className="formInfo backgroundHandler">
        <h2>Cambia tu email:</h2>
        <form onSubmit={handleEmailSubmit} className="formHandler ">
          <input
            onChange={handleEmailFormInputChange}
            name="newEmail"
            type="email"
            className="textInput"
            placeholder="Ingresa el nuevo correo"
          />
          <input
            onChange={handleEmailFormInputChange}
            name="confirmationNewEmail"
            type="controlEmail"
            className="textInput"
            placeholder="Ingresa una vez mas el correo"
          />
          <input type="submit" value="Cambiar correo" />
        </form>
      </div>

      <div className="formInfo backgroundHandler">
        <h2>Cambia tu contraseña:</h2>
        <form onSubmit={handlePasswordSubmit} className="formHandler ">
          <input
            onChange={handlePasswordFormInputChange}
            name="newPassword"
            type="password"
            className="textInput"
            placeholder="Nueva contraseña"
          />
          <input
            onChange={handlePasswordFormInputChange}
            name="newPasswordConfirmation"
            type="password"
            className="textInput"
            placeholder="Confirma tu nueva contraseña"
          />
          <input type="submit" value="Cambia tu contraseña" />
        </form>
      </div>

      <div className="formInfo backgroundHandler">
        <h2>¿Borrar tu cuenta?</h2>
        <div className="formHandler ">
          <DeleteUser />
        </div>
      </div>
    </div>
  );
}
