namespace Musikus.Api.Instrumente
{
    public class Posaune: Instrument
    {
        public Posaune(string artikelNr, string name, string hersteller, decimal preis)
            : base(artikelNr, name, "Posaune", hersteller, preis)
        {
        }
    }
}