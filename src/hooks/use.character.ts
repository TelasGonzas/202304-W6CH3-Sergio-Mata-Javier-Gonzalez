import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Character } from "../models/character";
import { ApiRepository } from "../services/api.repository";
import { AppDispatch, RootState } from "../core/store/store";
import * as ac from "../redux/character.slice";
import { consoleError } from "../core/services/errors";

export function useCharacter() {
  const { characters } = useSelector((state: RootState) => state.characters);
  const dispatch: AppDispatch = useDispatch();

  const characterUrl = "http://localhost:3000/characters";

  const repo: ApiRepository<Character> = useMemo(
    () => new ApiRepository<Character>(characterUrl),
    []
  );

  const handleLoad = useCallback(async () => {
    try {
      const loadedCharacter = await repo.getAll();
      dispatch(ac.load(loadedCharacter));
    } catch (error) {
      consoleError(error);
    }
  }, [repo, dispatch]);

  useEffect(() => {
    handleLoad();
  });

  // const handleKill = async (character: Character) => {
  //   try{

  //   }
  // }

  // return {
  //   handleLoad: characters,
  // };
  return {
    characters,
  };
}
