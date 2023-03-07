var config = require("./dbconfig");
const sql = require("mssql");

async function getBauteile() {
  try {
    let pool = await sql.connect(config);
    let products = await pool.request().query("SELECT * from tblBauteile");
    return products.recordsets;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getBauteile: getBauteile,
};
