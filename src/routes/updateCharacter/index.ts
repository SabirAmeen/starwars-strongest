import type { RequestHandler } from "@builder.io/qwik-city";
import { getMatchIds } from "../../serverUtils/getMatchIds";
import imageList from "../../../public/starwars.json";
import prisma from '../../lib/prisma';

export const onPost: RequestHandler = async ({ json, request }) => {
  try {
    const requestBody = await request.json();
    const loser = requestBody.firstImgID === requestBody.winner ? requestBody.secImgID : requestBody.firstImgID;
    const upCreateWinner = prisma.vote_bank.upsert({
      where: {
        id: requestBody.winner,
      },
      update: {
        hits: { increment: 1 },
        totalhits: { increment: 1 },
      },
      create: {
        id: requestBody.winner,
        hits: 1,
        totalhits: 1,
      }
    });
    const upCreateLoser = prisma.vote_bank.upsert({
      where: {
        id: loser,
      },
      update: {
        totalhits: { increment: 1 },
      },
      create: {
        id: loser,
        hits: 0,
        totalhits: 1,
      }
    })
    await prisma.$transaction([upCreateWinner, upCreateLoser])
    const firstId = getMatchIds();
    const secondId = getMatchIds(firstId);
    json(200, {
      data: {
        firstImage: imageList.find((image) => image.id === firstId),
        secondImage: imageList.find((image) => image.id === secondId),
      },
    });
  }
  catch(e) {
    json(200, {
      error: 'something went wrong',
    });
  }
};
