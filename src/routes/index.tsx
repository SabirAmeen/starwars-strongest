import { component$ } from '@builder.io/qwik';
import { loader$ } from '@builder.io/qwik-city';
import type { DocumentHead } from '@builder.io/qwik-city';

export const data = loader$(async () => {
  try {
    const getVal = await (await fetch('https://swapi.dev/api/people/1')).json();
    return ({
      dataVal: JSON.stringify(getVal)
    })
  } catch(e) {
    return ({ dataVal: "Couldn't get data" })
  }
})

export default component$(() => {
  const test = data.use();
  return (
    <div>
      {test.value.dataVal}
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
