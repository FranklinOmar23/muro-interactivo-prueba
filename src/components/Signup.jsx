// src/components/Signup.jsx
import { useState } from 'react';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { ref, set } from 'firebase/database';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Guardar los datos del usuario en Realtime Database
      await set(ref(db, 'users/' + user.uid), {
        firstName,
        lastName,
        email
      });

      navigate('/');
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  };

  return (
    <div>
      <h1>Registrarse</h1>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Nombre" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        <input type="text" placeholder="Apellido" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        <input type="email" placeholder="Correo Electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Signup;
