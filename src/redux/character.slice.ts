import { createSlice } from "@reduxjs/toolkit";
import { Character } from "../models/character";

export type charactersState = {
  characters: Character[];
};

const initialState: charactersState = {
  characters: [],
};

const slicecharacters = createSlice({
  name: "characters",
  initialState,
  reducers: {
    load: (state, { payload }) => ({
      ...state,
      characters: payload,
    }),
  },
});

export const ac = slicecharacters.actions;
export default slicecharacters.reducer;
