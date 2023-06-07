import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiRepository } from "../core/services/api.repository";
import { ac } from "./character.slice";
import { Character } from "../models/character";

export const loadTasksAsync = createAsyncThunk(
  ac.load,
  async (repo: ApiRepository<Character>) => {
    return await repo.getAll();
  }
);
