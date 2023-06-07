import { Character } from "../../models/character";

type PropsType = {
  item: Character;
};

export function CharacterCard({ item }: PropsType) {
  function isKing(item: Character) {
    return "reignyears" in item;
  }

  function isSwordsman(item: Character) {
    return "weapon" in item && "dexterity" in item;
  }

  function isKingshand(item: Character) {
    return "supports" in item;
  }

  function isSquire(item: Character) {
    return "supports" in item && "pelotismo" in item;
  }

  return (
    <li className="character col" key={item.id}>
      <div className="card character__card">
        <img
          src={`img/${item.name.toLowerCase()}.jpg`}
          alt={`${item.name} ${item.family}`}
          className={`character__picture card-img-top ${
            !item.alive ? "dead" : ""
          }`}
        />
        <div className="card-body">
          <h2 className="character__name card-title h4">
            {item.name} {item.family}
          </h2>
          <div className="character__info">
            <ul className="list-unstyled">
              <li>Edad: {item.age}</li>
              <li>
                Estado:
                {item.alive ? (
                  <i className="fas fa-thumbs-up"></i>
                ) : (
                  <i className="fas fa-thumbs-down"></i>
                )}
              </li>
            </ul>
          </div>
          <div className="character__overlay">
            <ul className="list-unstyled">
              {isKing(item) && <li>Años de reinado: {item.reignyears}</li>}
              {isSwordsman(item) && (
                <>
                  <li>Arma: {item.weapon}</li>
                  <li>Destreza: {item.dexterity}</li>
                </>
              )}
              {isKingshand(item) && <li>Asesora a: {item.name}</li>}
              {isSquire(item) && <li>Peloteo: {item.pelotismo}</li>}
            </ul>
            <div className="character__actions">
              <button className="character__action btn">habla</button>
              <button className="character__action btn">muere</button>
            </div>
          </div>
        </div>
        {isKing(item) && <i className="emoji">👑</i>}
        {isSwordsman(item) && <i className="emoji">🗡️</i>}
        {isKingshand(item) && <i className="emoji">🗿</i>}
        {isSquire(item) && <i className="emoji">🛡️</i>}
      </div>
    </li>
  );
}
