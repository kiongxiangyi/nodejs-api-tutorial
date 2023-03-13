const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Stuecklisten = sequelize.define(
  "Stuecklisten",
  {
    ID: { type: Sequelize.INTEGER, primaryKey: true },
    Stueckliste: { type: Sequelize.STRING},
    Stuecklistenvariante: { type: Sequelize.STRING},
    Stuecklistennummer: { type: Sequelize.STRING},
    Stuecklistentyp: { type: Sequelize.STRING},
    Artikel: { type: Sequelize.STRING},
    Preis: { type: Sequelize.DECIMAL},
    Zeichnungsnummer: { type: Sequelize.STRING},
    Zeichnung: { type: Sequelize.STRING},
    Hersteller: { type: Sequelize.STRING},
    Kombiwerkzeug: { type: Sequelize.BOOLEAN},
    DauerZusammenbau: { type: Sequelize.DECIMAL},
    Standmengenauswahl: { type: Sequelize.STRING},
    StandmengeRueckwaerts: { type: Sequelize.BOOLEAN},
    Zusatztext1: { type: Sequelize.STRING},
    Zusatztext2: { type: Sequelize.STRING},
    Zusatztext3: { type: Sequelize.STRING},
    Zusatztext4: { type: Sequelize.STRING},
    Zusatztext5: { type: Sequelize.STRING},
    Dokument1: { type: Sequelize.STRING},
    Dokument2: { type: Sequelize.STRING},
    Bemerkung: { type: Sequelize.STRING},
    AngelegtAm: { type: Sequelize.datetime},
    AngelegtVon: { type: Sequelize.STRING},
    BearbeitetAm: { type: Sequelize.DATE},
    BearbeitetVon: { type: Sequelize.STRING},
    
  },
  {
    tableName: "tblStuecklisten",
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Bauteile;
/* 
ID	int
Bauteil	nvarchar(100)
Bauteilvariante	nvarchar(100)
Bauteilnummer	nvarchar(100)
Bauteiltyp	nvarchar(100)
Artikel	nvarchar(50)
Zeichnungsnummer	nvarchar(100)
Zeichnung	nvarchar(500)
Werkstoff	nvarchar(100)
Preis	decimal(18, 2)
WechselJahrMillionSoll	int
BruecheJahrMillionSoll	int
Bauteilplanung	bit
BauteilGesamtstueckzahl	decimal(18, 3)
BauteilGesamtkosten	decimal(18, 2)
KostenProBauteilSoll	decimal(18, 2)
Beschaffung	nvarchar(200)
Verantwortlich	nvarchar(200)
AufbereitungIntern	bit
EinstellungIntern	bit
Zusatztext1	nvarchar(500)
Zusatztext2	nvarchar(500)
Zusatztext3	nvarchar(500)
Zusatztext4	nvarchar(500)
Zusatztext5	nvarchar(500)
AngelegtAm	datetime
AngelegtVon	nvarchar(200)
*/
