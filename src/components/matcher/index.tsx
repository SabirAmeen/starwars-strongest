import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './matcher.css?inline';

export default component$(() => {
  useStylesScoped$(styles);


  const renderImageBtn = () => {
    return (
      <div class="mb-10 flex flex-col lg:mr-20 lg:mb-0 lg:last:mr-0">
        <img
          class="w-40 h-40 object-cover mx-auto mb-5"
          src="https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg"
        />
        <button class="bg-sky-500 hover:bg-sky-700 text-base rounded py-2 w-40 mx-auto">
          Stronger
        </button>
      </div>
    )
  }

  return (
    <article class="flex align-center flex-col lg:flex-row lg:justify-center">
        {renderImageBtn()}
        {renderImageBtn()}
    </article>
  );
});
