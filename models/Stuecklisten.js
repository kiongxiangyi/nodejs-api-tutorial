const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Stuecklisten = sequelize.define(
  "Stuecklisten",
  {
    ID: { type: Sequelize.INTEGER, primaryKey: true },
    Stueckliste: { type: Sequelize.STRING },
    Stuecklistenvariante: { type: Sequelize.STRING },
    Stuecklistennummer: { type: Sequelize.STRING },
    Stuecklistentyp: { type: Sequelize.STRING },
    Artikel: { type: Sequelize.STRING },
    Preis: { type: Sequelize.DECIMAL },
    Zeichnungsnummer: { type: Sequelize.STRING },
    Zeichnung: { type: Sequelize.STRING },
    Hersteller: { type: Sequelize.STRING },
    Kombiwerkzeug: { type: Sequelize.BOOLEAN },
    DauerZusammenbau: { type: Sequelize.DECIMAL },
    Standmengenauswahl: { type: Sequelize.STRING },
    StandmengeRueckwaerts: { type: Sequelize.BOOLEAN },
    Zusatztext1: { type: Sequelize.STRING },
    Zusatztext2: { type: Sequelize.STRING },
    Zusatztext3: { type: Sequelize.STRING },
    Zusatztext4: { type: Sequelize.STRING },
    Zusatztext5: { type: Sequelize.STRING },
    Dokument1: { type: Sequelize.STRING },
    Dokument2: { type: Sequelize.STRING },
    Bemerkung: { type: Sequelize.STRING },
    AngelegtAm: { type: Sequelize.datetime },
    AngelegtVon: { type: Sequelize.STRING },
    BearbeitetAm: { type: Sequelize.DATE },
    BearbeitetVon: { type: Sequelize.STRING },
  },
  {
    tableName: "tblStuecklisten",
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Stuecklisten;