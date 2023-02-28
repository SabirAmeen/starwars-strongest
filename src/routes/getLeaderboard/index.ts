import type { RequestHandler } from '@builder.io/qwik-city';
import prisma from '../../lib/prisma';
import { findCharacter } from '../../serverUtils/findCharacter';

export const onGet: RequestHandler = async ({ json }) => {
  try {
    const dbResult: any = await prisma.vote_bank.findMany();
    let apiResult = [];
    if (dbResult.length) {
      apiResult = dbResult.map((row: any) => {
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