import { component$, Slot } from '@builder.io/qwik';

import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main class="h-full">
        <Header />
        <section class="h-full flex items-center">
          <Slot />
        </section>
      </main>
      <footer class="fixed bottom-0 left-0 right-0 text-center">
        Made with ♡ by Sabir Ameen
      </footer>
    </>
  );
});
