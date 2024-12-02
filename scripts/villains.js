import { getVillains } from "./database.js";

const villains = getVillains();

export const VillainList = () => {
  let villainHTML = "<ul>";

  for (const villain of villains) {
    villainHTML += `<li>Name: ${villain.name}</li>`;
    villainHTML += `<li>Power: ${villain.power}</li>`;
  }

  villainHTML += "</ul>";

  return villainHTML;
};
