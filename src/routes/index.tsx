import { loader$ } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Matcher from '../components/matcher';

export const getMatchImageList = loader$(async (ev: any) => {
  const imageList = await (await fetch(`${ev.url.origin}/getMatchImages`)).json();
  return imageList?.data || {};
})

export default component$(() => {
  const {value: {
    firstImage,
    secondImage
  } = {}} = getMatchImageList.use();
  return (
    <div class='w-300 mx-auto'>
      <h2 class="text-center mb-10 text-3xl">Who is the strongest?</h2>
      <Matcher firstImage={firstImage} secondImage={secondImage} />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Star Wars Strongest',
  meta: [
    {
      name: 'description',
      content: 'A WebApp to find the strongest Star Wars character',
    },
  ],
};
