import type { RequestHandler } from '@builder.io/qwik-city';
import { findCharacter } from '../../serverUtils/findCharacter';
import { connectDB } from "../../serverUtils/connectDB";

export const onGet: RequestHandler = async ({ json }) => {
  try {
    const dbResult: any = await connectDB(`SELECT * FROM vote_bank`);
    let apiResult = [];
    if (dbResult.rows.length) {
      apiResult = dbResult.rows.map((row: any) => {
        const {id, image, name} = findCharacter(row.id);
        return ({
          id,
          image,
          name,
          percentage: (row.hits/row.totalhits) * 100,
        })
      }).sort((a,b) => b.percentage - a.percentage)
    }
    json(200, {
      data: {
        characterList: apiResult
      }
    })
  } catch (e) {
    json(500, {
      data: 'Something went wrong'
    })
  }
};