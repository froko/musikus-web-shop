export interface InstrumentListItem {
  artikelNr: string;
  name: string;
  typ: string;
  hersteller: string;
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

export interface InstrumentFilter {
  typen: string[];
  hersteller: string[];
  selectedTyp: string;
  selectedHersteller: string;
}
