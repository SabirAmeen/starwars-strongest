import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './matcher.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <article>
        <img src="https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg" />
    </article>
  );
});
