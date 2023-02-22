import { loader$ } from '@builder.io/qwik-city';
import { component$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Matcher from '../components/matcher';
import Loader from '../components/loader';


export const getMatchImageList = loader$(async (ev: any) => {
  const imageList = await (await fetch(`${ev.url.origin}/getMatchImages`)).json();
  return imageList?.data || {};
})

export default component$(() => {

  const state = useStore({ firstImg: null, secondImg: null });
  const loader = useStore({loading: false});
  
  const {value: {
    firstImage,
    secondImage
  } = {}} = getMatchImageList.use();

  const firstImg = state.firstImg || firstImage;
  const secondImg = state.secondImg || secondImage;
  return (
    <div class='w-300 mx-auto h-full lg:h-auto'>
      <h2 class="text-center mb-10 text-3xl">Who is the strongest?</h2>
      {
        loader.loading && <Loader />
      }
      <Matcher
        key={`${firstImg.id}${secondImg.id}`}
        firstImage={firstImg}
        secondImage={secondImg}
        disableBtn={loader.loading}
        onSelect$={(charSelected: number, firstImgID: any, secImgID: any) => {
          loader.loading = true;
          fetch(`${window.location.origin}/updateCharacter`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              winner: charSelected,
              firstImgID,
              secImgID
            })
          })
          .then(res => res.json())
          .then((res) => {
            state.firstImg = res?.data?.firstImage || null;
            state.secondImg = res?.data?.secondImage || null;
          })
          .finally(() => {
            loader.loading = false;
          })
        }}
      />
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
