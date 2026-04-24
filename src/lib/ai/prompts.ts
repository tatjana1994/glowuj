export const faceValidationPrompt = `
Ti proveravaš da li je korisnička fotografija LICA dobra za stilsku analizu.
Vrati isključivo JSON.

Proveri:
- da li postoji tačno jedno lice
- da li je lice okrenuto napred ili skoro napred
- da li je osvetljenje dovoljno dobro
- da li fotografija nije previše mutna
- da li lice nije zaklonjeno
- da li korisnik nema sunčane naočare
- da li nema očigledno jak filter

Vrati JSON oblika:
{
  "valid": boolean,
  "errors": string[]
}
`;

export const bodyValidationPrompt = `
Ti proveravaš da li je korisnička fotografija TELA dobra za stilsku analizu.
Vrati isključivo JSON.

Proveri:
- da li je na slici tačno jedna osoba
- da li se vidi cela figura ili skoro cela figura sa jasno vidljivom siluetom
- da li osoba stoji napred ili skoro napred
- da li osoba ne sedi
- da li odeća ne sakriva potpuno siluetu
- da li fotografija nije previše mutna ili tamna

Vrati JSON oblika:
{
  "valid": boolean,
  "errors": string[]
}
`;

export const faceAnalysisPrompt = `
Analiziraj lice osobe za stilsku preporuku.
Vrati isključivo JSON.

Vrati JSON oblika:
{
  "undertone": "warm" | "cool" | "neutral",
  "contrast": "low" | "medium" | "high",
  "season": string,
  "faceShape": string,
  "bestMetals": string[],
  "bestColorFamilies": string[],
  "avoidColorFamilies": string[]
}
`;

export const bodyAnalysisPrompt = `
Analiziraj telo osobe za stilsku preporuku.
Vrati isključivo JSON.

Vrati JSON oblika:
{
  "bodyShape": string,
  "proportionNotes": string[],
  "fitFocus": string[],
  "recommendedSilhouettes": string[],
  "avoidSilhouettes": string[]
}
`;

export function styleReportPrompt(input: {
  face: unknown;
  body: unknown;
  pol?: string | null;
  starosnaGrupa?: string | null;
  stil?: string | null;
  prilika?: string | null;
}) {
  return `
Kreiraj premium, jasan i konkretan lični stilski izveštaj na SRPSKOM jeziku.

Ulazni strukturisani podaci:

LICE:
${JSON.stringify(input.face)}

TELO:
${JSON.stringify(input.body)}

PREFERENCE KORISNIKA:
- pol: ${input.pol ?? ''}
- starosna grupa: ${input.starosnaGrupa ?? ''}
- stil: ${input.stil ?? ''}
- prilika: ${input.prilika ?? ''}

Vrati ISKLJUČIVO JSON sledećeg oblika:
{
  "summary": string,
  "palette": {
    "neutrals": string[],
    "accents": string[],
    "metals": string[]
  },
  "clothingRecommendations": {
    "tops": string[],
    "trousers": string[],
    "dresses": string[],
    "jackets": string[],
    "necklines": string[],
    "sleeves": string[]
  },
  "avoidList": string[],
  "outfitFormulas": string[],
  "shoppingDirections": string[]
}

Pravila:
- piši jasno, kratko i konkretno
- ne piši previše generički
- sav tekst mora biti na srpskom
- preporuke treba da budu praktične i odmah primenljive
`;
}
