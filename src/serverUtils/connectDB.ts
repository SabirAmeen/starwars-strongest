import pg from 'pg';

const Client = pg.Client;

export const connectDB = async (query: string) => {
  try {
    const client = new Client({
      user: process.env.PGUSER,
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      password: process.env.PGPASSWORD,
      port: process.env.PGPORT ,
    });
    await client.connect();
    const res = await client.query(query);
    await client.end();
    return res;
  } catch (error) {
    return error
  }
};