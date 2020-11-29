import React from 'react';
import { useForm } from '../../hooks/useForm';
import { login } from '../../services/login.service';

export const LoginPage = ({ history }) => {
  const [values, handleInputChange] = useForm({
    user: '',
    password: '',
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    const { user, password } = values;

    try {
      await login(user, password);
      history.replace('/');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>

      <form className="mt-5" onSubmit={handleLogin}>
        <div className="form-group">
          <input
            type="text"
            name="user"
            className="form-control"
            placeholder="User"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            onChange={handleInputChange}
          />
        </div>
        <button className="btn btn-outline-danger" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
