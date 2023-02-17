import type { RequestHandler } from '@builder.io/qwik-city';
import { getMatchIds } from '../../serverUtils/getMatchIds';
import imageList from '../../../public/starwars.json';

export const onGet: RequestHandler = async ({ json }) => {
  const firstId = getMatchIds();
  const secondId = getMatchIds(firstId)
  json(200, {
    data: {
      firstImage: imageList.find((image) => image.id === firstId),
      secondImage: imageList.find((image) => image.id === secondId)
    }
  })
};