import { Compound } from "./Compound";
import { PopularCompound } from "./PopularCompound";

function interact(compound1: Compound, compound2: Compound) {
  if (!compound1.GetMolecularFormula() || !compound2.GetMolecularFormula()) {
      return 'Molecular fomula not specific!'
  }
  return `${compound1.GetMolecularFormula()} + ${compound2.GetMolecularFormula()}`;
}

function main() {
  const chemicalX = new Compound("X");
  const benzene = new PopularCompound("benzene");
  const water = new PopularCompound("water");
  chemicalX.Display();
  benzene.Display();
  console.log(interact(water, chemicalX));
}

main();
