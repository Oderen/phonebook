import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

axios.defaults.baseURL = 'https://phonebook-6iw6.onrender.com/api';
// axios.defaults.baseURL = 'http://localhost:3001/api';

// Contacts

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',

  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');

      return data;
    } catch (error) {
      console.log('error', error);
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',

  async (newContact, { rejectWithValue }) => {
    try {
      const fetchedNewContact = await axios.post('/contacts', newContact);

      return fetchedNewContact.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',

  async (contactID, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${contactID}`);

      return contactID;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Auth

export const registerUser = createAsyncThunk(
  'auth/register',
  async credentials => {
    try {
      const { data } = await axios.post('/users/register', credentials);
      console.log('data', data);
      token.set(data.token);

      const name = data.user.email.split('@')[0];

      return { name, ...data };
    } catch (error) {
      console.log('Error: ', error);
      throw error;
    }
  }
);

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    const name = data.user.email.split('@')[0];
    token.set(data.token);
    return {
      name,
      ...data,
    };
  } catch (error) {
    throw error;
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      const persistedToken = state.auth.token;

      if (persistedToken === null) {
        throw new Error('NA');
      }

      token.set(persistedToken);

      const { data } = await axios.get('/users/current');

      const name = data.email.split('@')[0];
      return {
        name,
        ...data,
      };
    } catch (error) {
      console.log('error', error);
      throw error;
    }
  }
);

export const resendEmail = createAsyncThunk('email/resend', async email => {
  try {
    const sendData = {
      email,
    };

    const response = await axios.post(
      'https://phonebook-6iw6.onrender.com/api/users/verify',
      sendData
    );

    if (response.status !== 200) {
      throw new Error();
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
});
