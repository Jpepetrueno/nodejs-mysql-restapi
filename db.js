import {createPool} from 'mysql2/promise'

export const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'mysqlpw1',
  port: 3307,
  database: 'companydb'
})