// Import the mysql2/promise library for asynchronous MySQL operations
import mysql from "mysql2/promise";

// Create a connection pool with specified database credentials
const pool = mysql.createPool({
  host: "127.0.0.1",
  port:3306,
  user: "root",
  password: "lucius",
  database: "userdata",
});

// Export an async function to execute SQL queries
export async function query(sql, params=[]) {
  // Replace undefined values with null
  const sanitizedParams = params.map(param => param === undefined ? null : param);
  
  // Get a connection from the pool
  const connection = await pool.getConnection();
  try {
    // Execute the query with sanitized parameters
    const [results] = await connection.execute(sql, sanitizedParams);
    return results;
  } catch(error){
    console.log(error)
  }
  finally {
    connection.release(); // Always release the connection back to the pool
  }
}

// Export the function insertIntoTable to be used elsewhere in the codebase
export async function insertIntoTable(tableName, columnNames, values) {
  // Check if the number of columns matches the number of values
  if (columnNames.length !== values.length) {
    // If they don't match, throw an error
    throw new Error('Column names and values length mismatch');
  }

  // Join the column names into a single string, separated by commas
  const columnsString = columnNames.join(', ');
  // Create a string of placeholders (e.g., "?, ?, ?") for the values
  const placeholders = values.map(() => '?').join(', ');

  // Construct the SQL query string using template literals
  const queryString = `INSERT  INTO ${tableName} (${columnsString}) VALUES (${placeholders})`;
  
  // Execute the query with the constructed query string and values
  return query(queryString, values);
}
