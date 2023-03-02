import mysql from "mysql2/promise";

// const HOST = "ec2-54-169-182-174.ap-southeast-1.compute.amazonaws.com";
// const USER = "applicant";
// const PASSWORD = "OxzdeuEXBM85=+xQnCV7U";
// const PORT = 5432;
// const DATABASE = "FSD_2022_CAMELLO";

const HOST = "127.0.0.1";
const USER = "root";
const PASSWORD = "";
const PORT = 3306;
const DATABASE = "calculator";

let connect: mysql.Connection;

async function databaseConnection() {
  try {
    connect = await mysql.createConnection({
      host: HOST,
      user: USER,
      port: PORT,
      password: PASSWORD,
      database: DATABASE,
    });
    console.log("Connected successfully!");
  } catch (e) {
    console.log(e);
  }
}

export default databaseConnection;

export { connect };
