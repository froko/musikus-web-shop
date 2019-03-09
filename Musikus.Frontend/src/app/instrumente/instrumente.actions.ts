export class GetAllInstruments {
  static readonly type = '[Instrumente] Get All Instruments';

  constructor() {}
}

export class FilterByInstrumentTyp {
  static readonly type = '[Instrumente] Filter By Instrument Typ';

  constructor(public instrumentTyp: string) {}
}

export class FilterByHersteller {
  static readonly type = '[Instrumente] Filter By Hersteller';

  constructor(public hersteller: string) {}
}
