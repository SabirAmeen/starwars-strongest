import { loader$ } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export const getLeaderboard = loader$(async (ev: any) => {
  const leaderboard = await (await fetch(`${ev.url.origin}/getLeaderboard`)).json();
  return leaderboard?.data || [];
})


export default component$(() => {
  const leaderBoardData: any = getLeaderboard.use();
  const renderLeaderBoard = (character: any) => {
    return (
      <li class="flex justify-between items-center px-5 py-5">
        <div class="text-center max-w-[50%]">
            <img src={character.image} alt={character.name}
                class="w-[100px] h-[100px] lg:w-40 lg:h-40 object-cover object-top my-5"
            />
            <span class="text-lg">{character.name}</span>
        </div>
        <span class="text-lg">
          {Math.round(character.percentage * 100) / 100}%
        </span>
      </li>
    )
  }
    
  return (
    <div class='max-w-[600px] mx-auto w-full px-5 h-full'>
        <ul class="border-white border-[1px] rounded">
            <li class="flex justify-between items-center border-b-[1px] px-5 py-5">
                <div class="text-center text-lg">
                    Character
                </div>
                <span class="text-lg">
                    Hits
                </span>
            </li>
            {
              leaderBoardData?.value?.map((character: any) => renderLeaderBoard(character))
            }
        </ul>
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
