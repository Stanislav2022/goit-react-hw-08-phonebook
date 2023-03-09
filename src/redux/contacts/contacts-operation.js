import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const isDuplicate = ({ name }, contacts) => {
//   const NormalizedName = name.toLowerCase();
//   const result = contacts.items.find(item => {
//     return NormalizedName === item.name.toLowerCase();
//   });
//   return Boolean(result);
// };

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkApi) => {
    try {
      const res = await axios.get();
      console.log(res);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },

  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      //   if (isDuplicate(data, contacts)) {
      //     alert(`${data.name} - is already in contacts`);
      //     return false;
      //   }
    },
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/remove',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(id);
    }
  }
);
