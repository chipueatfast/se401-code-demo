/// <summary>
/// The 'Target' class
/// </summary>
export class Compound {
    protected chemical: string;
    protected boilingPoint: number;
    protected meltingPoint: number;
    protected molecularWeight: number;
    protected molecularFormula: string;
    constructor(chemical: string) {
        this.chemical = chemical;
        this.boilingPoint=NaN;
        this.meltingPoint=NaN;
        this.molecularFormula='';
        this.molecularWeight=NaN;
    }
    public Display(): void {
        console.log("Compound", this.chemical);
    }

    public GetMolecularFormula(): string {
        return this.molecularFormula;
    }
}