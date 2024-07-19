// Import the mysql2/promise library for asynchronous MySQL operations
import mysql from "mysql2/promise";

// Create a connection pool with specified database credentials
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "lucius",
  database: "files",
});

// Export an async function to execute SQL queries
export async function query(sql, params) {
  // Get a connection from the pool
  const connection = await pool.getConnection();
  try {
    // Execute the SQL query with the provided parameters
    return connection.execute(sql, params);
  } catch (err) {
    // Log any errors that occur during query execution
    console.log("error:", err);
  }
  // Note: The connection should be released back to the pool here
}
