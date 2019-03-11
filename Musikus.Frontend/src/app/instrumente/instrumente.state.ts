import { Action, Selector, State, StateContext } from '@ngxs/store';
import { forkJoin } from 'rxjs';
import { tap } from 'rxjs/operators';

import { FilterByHersteller, FilterByInstrumentTyp, GetAllInstruments, GetInstrument } from './instrumente.actions';
import { InstrumentListItem, InstrumentWithDescription } from './instrumente.model';
import { InstrumenteService } from './instrumente.service';

export interface InstrumenteStateModel {
  alleInstrumente: InstrumentListItem[];
  instrumente: InstrumentListItem[];
  instrument: InstrumentWithDescription;
  typen: string[];
  hersteller: string[];
  selectedTyp: string;
  selectedHersteller: string;
}

@State<InstrumenteStateModel>({
  name: 'instrumente',
  defaults: {
    alleInstrumente: null,
    instrumente: null,
    instrument: null,
    typen: [],
    hersteller: [],
    selectedTyp: '',
    selectedHersteller: ''
  }
})
export class InstrumenteState {
  constructor(private service: InstrumenteService) {}

  @Selector()
  public static instrumente(state: InstrumenteStateModel) {
    return state.instrumente;
  }

  @Selector()
  public static instrument(state: InstrumenteStateModel) {
    return state.instrument;
  }

  @Selector()
  public static filter(state: InstrumenteStateModel) {
    return {
      typen: state.typen,
      hersteller: state.hersteller,
      selectedTyp: state.selectedTyp,
      selectedHersteller: state.selectedHersteller
    };
  }

  @Action(GetAllInstruments)
  getAllInstruments(ctx: StateContext<InstrumenteStateModel>, action: GetAllInstruments) {
    const state = ctx.getState();
    if (state.alleInstrumente) {
      return state;
    }

    const instruments$ = this.service.getAll();
    const typen$ = this.service.getTypen();
    const hersteller$ = this.service.getHersteller();

    return forkJoin(instruments$, typen$, hersteller$).pipe(
      tap(values => {
        ctx.patchState({
          alleInstrumente: values[0],
          instrumente: values[0],
          typen: values[1],
          hersteller: values[2]
        });
      })
    );
  }

  @Action(GetInstrument)
  getInstrument(ctx: StateContext<InstrumenteStateModel>, action: GetInstrument) {
    const instrument$ = this.service.get(action.artikelNr);
    const beschreibung$ = this.service.getDescription(action.artikelNr);

    return forkJoin(instrument$, beschreibung$).pipe(
      tap(values => {
        ctx.patchState({
          instrument: new InstrumentWithDescription(values[0], values[1])
        });
      })
    );
  }

  @Action(FilterByInstrumentTyp)
  filterByInstrumentTyp(ctx: StateContext<InstrumenteStateModel>, action: FilterByInstrumentTyp) {
    ctx.patchState({
      selectedTyp: action.instrumentTyp
    });

    return this.filterInstruments(ctx);
  }

  @Action(FilterByHersteller)
  filterByHersteller(ctx: StateContext<InstrumenteStateModel>, action: FilterByHersteller) {
    ctx.patchState({
      selectedHersteller: action.hersteller
    });

    return this.filterInstruments(ctx);
  }

  private filterInstruments(ctx: StateContext<InstrumenteStateModel>) {
    const state = ctx.getState();
    let instrumente = state.alleInstrumente;

    if (state.selectedTyp) {
      instrumente = instrumente.filter(i => i.typ === state.selectedTyp);
    }

    if (state.selectedHersteller) {
      instrumente = instrumente.filter(i => i.hersteller === state.selectedHersteller);
    }

    return ctx.patchState({
      instrumente
    });
  }
}
