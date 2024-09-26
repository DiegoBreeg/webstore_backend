import express, { Response } from 'express';
import dotenv from 'dotenv'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname, '../public')));



app.get('*', (_, res: Response) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
  });

app.listen(process.env.PORT, () =>
{
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})