import mysql from "mysql2/promise";
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "lucius",
  database: "files",
});
export async function query(sql,params){
    const connection= await pool.getConnection()
    try{
        return connection.execute(sql,params)
    }catch(err){
        console.log("error:",err)
    }
}