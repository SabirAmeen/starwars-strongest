import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Matcher from '../components/matcher';

export default component$(() => {
  return (
    <div class='w-300 mx-auto'>
      <h2 class="text-center mb-10 text-3xl">Who is the strongest?</h2>
      <Matcher />
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
