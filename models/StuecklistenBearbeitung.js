const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const StuecklistenBearbeitung = sequelize.define(
  "StuecklistenBearbeitung",
  {
    ID: { type: Sequelize.INTEGER, primaryKey: true },
    Stueckliste: { type: Sequelize.STRING },
    Stuecklistenvariante: { type: Sequelize.STRING },
    Artikel: { type: Sequelize.STRING },
    Bearbeitungsnummer: { type: Sequelize.STRING },
    Bearbeitungstyp: { type: Sequelize.STRING },
    Bezeichnung1: { type: Sequelize.STRING },
    Bezeichnung2: { type: Sequelize.STRING },
    Bezeichnung3: { type: Sequelize.STRING },
    Aktiv: { type: Sequelize.BOOLEAN },
    Bauteil: { type: Sequelize.STRING },
    Bauteilvariante: { type: Sequelize.STRING },
    Operation: { type: Sequelize.STRING },
    Maschine: { type: Sequelize.STRING },
    Arbeitsplatz: { type: Sequelize.STRING },
    Linie: { type: Sequelize.STRING },
    Spindel: { type: Sequelize.STRING },
    Platz: { type: Sequelize.STRING },
    Dokument1: { type: Sequelize.STRING },
    Dokument2: { type: Sequelize.STRING },
    Bemerkung: { type: Sequelize.STRING },
    Krit1: { type: Sequelize.STRING },
    Krit2: { type: Sequelize.STRING },
    Krit3: { type: Sequelize.STRING },
    Krit4: { type: Sequelize.STRING },
    Krit5: { type: Sequelize.STRING },
    Krit6: { type: Sequelize.STRING },
    Krit7: { type: Sequelize.STRING },
    Krit8: { type: Sequelize.STRING },
    Krit9: { type: Sequelize.STRING },
    Krit10: { type: Sequelize.STRING },
    Krit11: { type: Sequelize.STRING },
    Krit12: { type: Sequelize.STRING },
    Krit13: { type: Sequelize.STRING },
    Krit14: { type: Sequelize.STRING },
    Krit15: { type: Sequelize.STRING },
    Krit16: { type: Sequelize.STRING },
    Krit17: { type: Sequelize.STRING },
    Krit18: { type: Sequelize.STRING },
    Krit19: { type: Sequelize.STRING },
    Krit20: { type: Sequelize.STRING },
  },
  {
    tableName: "tblStuecklistenBearbeitung",
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = StuecklistenBearbeitung;
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
