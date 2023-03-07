const config = {
  user: "sa",
  password: "freebsd",
  server: "localhost",
  database: "GTMS_Test",
  options: {
    trustedConnection: true,
    enableArithAbort: true,
    instancename: "SQL2016",
    trustServerCertificate: true,
  },
};

module.exports = config;
