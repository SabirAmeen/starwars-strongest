import type { RequestHandler } from "@builder.io/qwik-city";
import { getMatchIds } from "../../serverUtils/getMatchIds";
import imageList from "../../../public/starwars.json";
import { connectDB } from "../../serverUtils/connectDB";

export const onPost: RequestHandler = async ({ json, request }) => {
  try {
    const requestBody = await request.json();
    const loser = requestBody.firstImgID === requestBody.winner ? requestBody.secImgID : requestBody.firstImgID
    await connectDB(`UPDATE vote_bank SET hits=hits+1, totalhits=totalhits+1 WHERE id=${requestBody.winner};
    INSERT INTO vote_bank (id, hits, totalhits)
    SELECT ${requestBody.winner}, 1, 1
    WHERE NOT EXISTS (SELECT 1 FROM vote_bank WHERE id=${requestBody.winner});
    UPDATE vote_bank SET totalhits=totalhits+1 WHERE id=${loser};
    INSERT INTO vote_bank (id, hits, totalhits)
    SELECT ${loser}, 0, 1
    WHERE NOT EXISTS (SELECT 1 FROM vote_bank WHERE id=${loser})
    `);
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
