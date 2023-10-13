import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

import Link from '@mui/material/Link';
import Loader from '../../Loader/Loader';

import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { registerUser } from '../../../redux/ApiOperations';
import css from './SignUpForm.module.css';

export default function SignIn() {
  const dispatch = useDispatch();

  const isAuthProblem = useSelector(
    state => state.auth.isAuthProblem.isRegProblem
  );

  const [isActive, setIsActive] = useState(false);

  const buttonStyles = {
    backgroundColor: isActive ? '#2072af' : '#003262',
    transition: 'background-color 0.2s ease',
  };

  const [isEmailWrong, setIsEmailWrong] = useState(false);
  const [isPasswordWrong, setIsPasswordWrong] = useState(false);
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  const handleSubmit = event => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const email = data.get('email');
    const password = data.get('password');

    if (email === '') {
      return setIsEmailWrong(true);
    }
    setIsEmailWrong(false);

    if (password.length <= 5) {
      return setIsPasswordWrong(true);
    }

    setIsPasswordWrong(false);

    const userData = {
      name: email.split('@')[0],
      email,
      password,
    };

    dispatch(registerUser(userData));
  };

  return isRefreshing ? (
    <Loader text={'It may take a while'} />
  ) : (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#003262' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            id="email"
            name="email"
            type="email"
            label="Email Address"
            placeholder="example.something@gmail.com"
            autoComplete="email"
            margin="normal"
            required
            fullWidth
            autoFocus
            error={isEmailWrong || isAuthProblem ? true : false}
            helperText={
              isEmailWrong && <span>Invalid email. Please try again </span>
            }
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            error={isPasswordWrong ? true : false}
            inputProps={{ pattern: /^\S+@\S+\.\S+$/ }}
            helperText={'Must be at least 6 characters long'}
            autoComplete="current-password"
          />
          {isAuthProblem && (
            <div style={{ marginTop: 10 }}>
              <p style={{ margin: 0, color: 'red' }}>
                This email is already registered
              </p>
            </div>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2 }}
            style={{ ...buttonStyles }}
            className={css.signUpButton}
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
          >
            Sign Up
          </Button>
        </Box>

        <Link
          href="/phonebook/login"
          variant="body2"
          style={{
            textDecoration: 'none',
          }}
        >
          <p className={css.signUpLink}>
            <span>Have already an account?</span>
            <span style={{ marginLeft: 5 }}>Login</span>
          </p>
        </Link>
      </Box>
    </div>
  );
}
