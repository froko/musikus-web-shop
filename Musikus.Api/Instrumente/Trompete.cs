namespace Musikus.Api.Instrumente
{
    public class Trompete: Instrument
    {
        public Trompete(string artikelNr, string name, string hersteller, decimal preis)
            : base(artikelNr, name, "Trompete", hersteller, preis)
        {
        }
    }
}