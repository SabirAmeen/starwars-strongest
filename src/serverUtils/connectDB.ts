import pg from 'pg';

const Client = pg.Client;

export const connectDB = async (query: string) => {
  try {
    const client = new Client({
      user: process.env.PGUSER || 'postgres',
      host: process.env.PGHOST || 'containers-us-west-17.railway.app',
      database: process.env.PGDATABASE || 'railway',
      password: process.env.PGPASSWORD || '1OQbJ1zebrVErlHoUpc3',
      port: process.env.PGPORT || '7908',
    });
    await client.connect();
    const res = await client.query(query);
    await client.end();
    return res;
  } catch (error) {
    return error
  }
};