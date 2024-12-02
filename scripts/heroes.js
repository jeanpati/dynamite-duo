import { getHeroes } from "./database.js";

const heroes = getHeroes();

export const HeroList = () => {
  let heroHTML = "<ul>";

  for (const hero of heroes) {
    heroHTML += `<li>Name: ${hero.name}</li>`;
    heroHTML += `<li>Power: ${hero.power}</li>`;
  }

  heroHTML += "</ul>";

  return heroHTML;
};
