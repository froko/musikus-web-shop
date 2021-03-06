namespace Musikus.Api.Instrumente
{
    public class InstrumentListItem
    {
        public InstrumentListItem(string artikelNr, string name, string typ, string hersteller, decimal preis)
        {
            this.ArtikelNr = artikelNr;
            this.Name = name;
            this.Typ = typ;
            this.Hersteller = hersteller;
            this.Preis = preis;
        }

        public string ArtikelNr { get; }

        public string Name { get; }

        public string Typ { get; }

        public string Hersteller { get; }

        public decimal Preis { get; }

        public string Thumbnail => $"{Startup.BaseUrl}/images/{this.ArtikelNr}-Thumb.jpg";
    }
}