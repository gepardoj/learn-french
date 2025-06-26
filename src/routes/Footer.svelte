<script lang="ts">
  import { page } from "$app/state";
  import eiffelTower from "$lib/images/eiffel-tower.svg?raw";
  import profile from "$lib/images/profile.svg?raw";
  import options from "$lib/images/options.svg?raw";
  import Icon from "../stories/Icon.svelte";
</script>

<footer>
  <nav class="mb-2">
    <ul class="flex gap-6 place-self-center">
      <li aria-current={page.url.pathname === "/" ? "page" : undefined}>
        <a href="/" aria-label="learn french"
          ><Icon
            size="large"
            variant={page.url.pathname === "/" ? "primary" : undefined}
            icon={eiffelTower}
          /></a
        >
      </li>
      <li aria-current={page.url.pathname === "/me" ? "page" : undefined}>
        <a href="/me" aria-label="my profile"
          ><Icon
            size="large"
            variant={page.url.pathname === "/me" ? "primary" : undefined}
            icon={profile}
          /></a
        >
      </li>
      <li aria-current={page.url.pathname === "/options" ? "page" : undefined}>
        <a href="/options" aria-label="options"
          ><Icon
            size="large"
            variant={page.url.pathname === "/options" ? "primary" : undefined}
            icon={options}
          /></a
        >
      </li>
    </ul>
  </nav>
</footer>
