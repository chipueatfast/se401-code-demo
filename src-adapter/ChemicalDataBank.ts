// Adaptee
export class ChemicalDatabank {
        // The databank 'legacy API'
        public GetCriticalPoint(compound: string, point: string): number
        {
            // Melting Point
            if (point == "M")
            {
                switch (compound.toLowerCase())
                {
                    case "water": return 0.0;
                    case "benzene": return 5.5;
                    case "ethanol": return -114.1;
                    default: return 0;
                }
            }
            // Boiling Point
            else
            {
                switch (compound.toLowerCase())
                {
                    case "water": return 100.0;
                    case "benzene": return 80.1;
                    case "ethanol": return 78.3;
                    default: return 0;
                }
            }
        }
        public GetMolecularStructure(compound: string): string
        {
            switch (compound.toLowerCase())
            {
                case "water": return "H20";
                case "benzene": return "C6H6";
                case "ethanol": return "C2H5OH";
                default: return "";
            }
        }
        public GetMolecularWeight(compound: string): number
        {
            switch (compound.toLowerCase())
            {
                case "water": return 18.015;
                case "benzene": return 78.1134;
                case "ethanol": return 46.0688;
                default: return 0;
            }
        }
    }