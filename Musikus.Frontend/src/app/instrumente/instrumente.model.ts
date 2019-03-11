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

export class InstrumentWithDescription {
  artikelNr: string;
  name: string;
  typ: string;
  hersteller: string;
  preis: number;
  image: string;

  constructor(private instrument: Instrument, public beschreibung: string) {
    this.artikelNr = this.instrument.artikelNr;
    this.name = this.instrument.name;
    this.typ = this.instrument.typ;
    this.hersteller = this.instrument.hersteller;
    this.preis = this.instrument.preis;
    this.image = this.instrument.image;
  }
}

export interface InstrumentFilter {
  typen: string[];
  hersteller: string[];
  selectedTyp: string;
  selectedHersteller: string;
}
