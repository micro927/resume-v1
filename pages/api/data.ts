// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path';
import { promises as fs } from 'fs';

type Data = {
    personalInformation: object
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const jsonDirectory: String = path.join(process.cwd(), 'json');
    const filePath: Buffer = await fs.readFile(jsonDirectory + '/information.json') ?? {}
    const data: Data = JSON.parse(filePath.toString())
    res.status(200).json(data);
}