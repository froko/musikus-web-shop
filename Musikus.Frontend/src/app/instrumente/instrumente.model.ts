export interface InstrumentListItem {
  artikelNr: string;
  name: string;
  typ: string;
  preis: number;
  thumbnail: string;
}

export interface Instrument {
  artikelNr: string;
  name: string;
  typ: string;
  hersteller: string;
  preis: number;
  image: string;
}
