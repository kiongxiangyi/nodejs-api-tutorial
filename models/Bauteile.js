const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Bauteile = sequelize.define(
  "Bauteile",
  {
    ID: { type: Sequelize.INTEGER, primaryKey: true },
    Bauteil: { type: Sequelize.STRING },
    Bauteilvariante: { type: Sequelize.STRING },
    Bauteilnummer: { type: Sequelize.STRING },
    Bauteiltyp: { type: Sequelize.STRING },
    Artikel: { type: Sequelize.STRING },
    Zeichnungsnummer: { type: Sequelize.STRING },
    Zeichnung: { type: Sequelize.STRING },
    Werkstoff: { type: Sequelize.STRING },
    Preis: { type: Sequelize.DECIMAL },
    WechselJahrMillionSoll: { type: Sequelize.INTEGER },
    BruecheJahrMillionSoll: { type: Sequelize.INTEGER },
    Bauteilplanung: { type: Sequelize.BOOLEAN },
    BauteilGesamtstueckzahl: { type: Sequelize.DECIMAL },
    BauteilGesamtkosten: { type: Sequelize.DECIMAL },
    KostenProBauteilSoll: { type: Sequelize.DECIMAL },
    Beschaffung: { type: Sequelize.STRING },
    Verantwortlich: { type: Sequelize.STRING },
    AufbereitungIntern: { type: Sequelize.BOOLEAN },
    EinstellungIntern: { type: Sequelize.BOOLEAN },
    Zusatztext1: { type: Sequelize.STRING },
    Zusatztext2: { type: Sequelize.STRING },
    Zusatztext3: { type: Sequelize.STRING },
    Zusatztext4: { type: Sequelize.STRING },
    Zusatztext5: { type: Sequelize.STRING },
    AngelegtAm: { type: Sequelize.DATE },
    AngelegtVon: { type: Sequelize.STRING },
  },
  {
    tableName: "tblBauteile",
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
