import { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { Character } from "../models/character";
import { ApiRepository } from "../services/api.repository";
import { AppDispatch } from "../core/store/store";

export function useCharacter() {
  // const { characters } = useSelector((state: RootState) => state.character);
  const dispatch: AppDispatch = useDispatch();

  const characterUrl = "http://localhost:3000/characters";

  const repo: ApiRepository<Character> = useMemo(
    () => new ApiRepository<Character>(characterUrl),
    []
  );

  const handleLoad = useCallback(() => {
    dispatch(loadCharactersAsync(repo));
  }, [repo, dispatch]);

  return {
    handleLoad,
  };
}
