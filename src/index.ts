import express, { Response } from 'express';
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_, res: Response) =>
{
    res.send('hello world!')
})

app.listen(PORT, () =>
{
    console.log(`Server is running on http://localhost:${PORT}`)
})