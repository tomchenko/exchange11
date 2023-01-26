import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosExchange = createAsyncThunk(
  "exchange/axiosExchange",
  async function (_, { dispatch }) {
    const response = await axios.get(
      "https://openexchangerates.org/api/latest.json?app_id=23f0bec8700548a1a7666ad132aac493&symbols=EUR,CAD,SGD,DKK,NOK,%D0%A1NY,JPY,KZT,AUD,CHF,GBP,SEK,USD,RUB"
    );
    const result = response.data.rates;
    dispatch(setData(result));
  }
);

const exchangeSlice = createSlice({
  name: "exchange",
  initialState: {
    couple: JSON.parse(localStorage.getItem("couple")) || [],
    input2: "",
    input1: "",
    value1: "",
    value2: "",
    status: null,
    error: null,
    data: {},
  },
  reducers: {
    exchange(state) {
      let curs = (state.data[state.value2] / state.data[state.value1]).toFixed(
        2
      );
      state.couple.push({
        base: state.value1,
        base2: state.value2,
        rateBase: 1,
        rateBase2: curs,
        id: new Date().toISOString(),
      });
    },
    calculator(state, action) {
      state.input2 = (
        (state.data[action.payload.currency2] * state.input1) /
        state.data[action.payload.currency1]
      ).toFixed(2);
    },
    removeItem(state, action) {
      state.couple = state.couple.filter(
        (item) => item.id !== action.payload.id
      );
    },
    setInput1: (state, action) => {
      state.input1 = action.payload;
    },
    setValue1: (state, action) => {
      state.value1 = action.payload;
    },
    setValue2: (state, action) => {
      state.value2 = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default exchangeSlice.reducer;
export const {
  exchange,
  calculator,
  removeItem,
  setInput1,
  setValue1,
  setValue2,
  setData,
} = exchangeSlice.actions;
