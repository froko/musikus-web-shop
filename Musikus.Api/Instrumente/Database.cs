namespace Musikus.Api.Instrumente
{
    using System.Collections;
    using System.Collections.Generic;
    using System.Linq;

    public class Database: IEnumerable<Instrument>
    {
        private readonly List<Instrument> instrumente;

        public Database()
        {
            this.instrumente = new List<Instrument>
            {
                new Trompete("A101623", "Trompete in b PHOENIX Junior", "Phoenix", 765.00m),
                new Trompete("A101620", "Trompete in b PHOENIX Advanced", "Phoenix", 1098.00m),
                new Trompete("A101117", "Trompete in b YAMAHA YTR-2330", "Yamaha", 576.00m),
                new Trompete("A101133", "Trompete in b YAMAHA YTR-2330; versilbert", "Yamaha", 668.00m),
                new Trompete("A101599", "Trompete in b YAMAHA YTR-3335", "Yamaha", 725.00m),
                new Trompete("A101733", "Trompete in b YAMAHA YTR-3335; versilbert", "Yamaha", 834.00m),
                new Trompete("A100342", "Trompete in b BACH Stradivarius 180-37", "Bach", 3285.00m),
                new Trompete("A104338", "Trompete in b BACH Commercial LT190-1B", "Bach", 4140.00m),
                new Posaune("A100255", "Tenorposaune BACH Stradivarius 36", "Bach", 3438.00m),
                new Posaune("A600534", "Bassposaune BACH Stradivarius 50A3", "Bach", 6308.00m),
                new Posaune("A100275", "Tenorposaune YAMAHA YSL-610", "Yamaha", 2293.00m),
                new Posaune("A100276", "Tenorposaune YAMAHA YSL-350C", "Yamaha", 1703.00m),
                new Posaune("A100282", "Tenorposaune YAMAHA YSL-620", "Yamaha", 3095.00m)
            };
        }

        public IEnumerator<Instrument> GetEnumerator()
        {
            return this.instrumente.GetEnumerator();
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return this.GetEnumerator();
        }

        public IEnumerable<string> Typen
        {
            get { return this.instrumente.Select(i => i.Typ).Distinct(); }
        }

        public IEnumerable<string> Hersteller
        {
            get { return this.instrumente.Select(i => i.Hersteller).Distinct(); }
        }

        public IEnumerable<InstrumentListItem> AsListItems()
        {
            return this.instrumente.Select(i => new InstrumentListItem(i.ArtikelNr, i.Name, i.Typ, i.Hersteller, i.Preis));
        }
    }
}