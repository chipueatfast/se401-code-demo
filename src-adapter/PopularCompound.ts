/// <summary>
/// The 'Target' class

import { ChemicalDatabank } from "./ChemicalDataBank";
import { Compound } from "./Compound";

/// </summary>
export class PopularCompound extends Compound {
    private chemicalDataBank: ChemicalDatabank;
    constructor(chemical: string) {
        super(chemical);
        this.chemicalDataBank = new ChemicalDatabank();
        this.boilingPoint = this.chemicalDataBank.GetCriticalPoint(chemical, "B");
        this.meltingPoint = this.chemicalDataBank.GetCriticalPoint(chemical, "M");
        this.molecularWeight = this.chemicalDataBank.GetMolecularWeight(chemical);
        this.molecularFormula = this.chemicalDataBank.GetMolecularStructure(chemical);
        
    }
    public Display(): void {
        console.log("Compound   : ", this.chemical);
        console.log("Formula    : ", this.molecularFormula);
        console.log("Weight     : ", this.molecularWeight);
        console.log("Melting Pt : ", this.meltingPoint);
        console.log("Boiling Pt : ", this.boilingPoint);
    }
}
