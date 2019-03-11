namespace Musikus.Api.Instrumente
{
    using System.Collections.Generic;
    using System.Linq;
    using Microsoft.AspNetCore.Mvc;

    [ApiController]
    public class InstrumenteController : ControllerBase
    {
        private readonly Database database;
        
        public InstrumenteController(Database database)
        {
            this.database = database;
        }
        
        [HttpGet("api/instrumente")]
        public IEnumerable<InstrumentListItem> Get()
        {
            return this.database.AsListItems();
        }

        [HttpGet("api/instrumente/{artikelNr}")]
        public Instrument Get(string artikelNr)
        {
            return this.database.SingleOrDefault(i => i.ArtikelNr == artikelNr);
        }

        [HttpGet("api/instrumente/typen")]
        public IEnumerable<string> Typen()
        {
            return this.database.Typen;
        }

        [HttpGet("api/instrumente/hersteller")]
        public IEnumerable<string> Hersteller()
        {
            return this.database.Hersteller;
        }
    }
}