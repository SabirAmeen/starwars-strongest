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
      <footer class="fixed bottom-0 left-0 right-0 text-center bg-[var(--app-background)]">
        Made with ♡ by <a href="https://github.com/SabirAmeen" target="_blank">Sabir Ameen</a>
      </footer>
    </>
  );
});
