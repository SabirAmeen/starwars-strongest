import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header class="fixed top-0 left-0 right-0 text-center text-[30px] font-bold font-main">
      Star Wars Matcher
    </header>
  );
});
