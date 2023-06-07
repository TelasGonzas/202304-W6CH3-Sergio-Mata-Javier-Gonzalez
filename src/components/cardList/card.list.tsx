import { CharacterCard } from "../card/character.card";
import { Sentence } from "../sentences/sentences";

export function List() {
  const { characters, handleKill } = useCharacters();

  return (
    <>
      <div className="app container">
        <ul className="characters-list row list-unstyled">
          {characters.map((item) => (
            <CharacterCard
              item={item}
              key={item.id}
              handleKill={handleKill}
            ></CharacterCard>
          ))}
        </ul>
      </div>
      <div className="comunications">
        <Sentence></Sentence>
      </div>
    </>
  );
}
