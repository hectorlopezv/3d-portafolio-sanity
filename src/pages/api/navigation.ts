// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: string;
  title: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const data = await fetch(
    `https://gspu7iun.api.sanity.io/v1/data/query/production?query=*[_type=="navigation"]`
  );
  const dataJson = await data.json();
  res.status(200).json(dataJson.result);
}
