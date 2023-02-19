import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header
      class="px-5 flex justify-between top-0 left-0 w-full mx-auto right-0 text-center font-main items-center text-[30px] bg-[var(--app-background)] max-w-[1024px] lg:px-20 py-5">
      <Link href='/' class="text-left text-lg">
        Home
      </Link>
      <Link href='/leaderboard' class="text-lg">
        Leaderboard
      </Link>
    </header>
  );
});
