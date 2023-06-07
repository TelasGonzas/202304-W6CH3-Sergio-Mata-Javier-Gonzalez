import { useCharacter } from "../../hooks/use.character";
import { Character } from "../../models/character";
import { CharacterCard } from "../card/character.card";
import { Sentence } from "../sentences/sentences";

export function List() {
  const { characters } = useCharacter();

  return (
    <>
      <div className="app container">
        <ul className="characters-list row list-unstyled">
          {characters.map((item: Character) => (
            <CharacterCard item={item} key={item.id}></CharacterCard>
          ))}
        </ul>
      </div>
      <div className="comunications">
        <Sentence></Sentence>
      </div>
    </>
  );
}
