<script lang="ts">
  import { page } from "$app/state";
</script>

<footer>
  <nav>
    <ul class="flex gap-3 place-self-center">
      <li aria-current={page.url.pathname === "/" ? "page" : undefined}>
        <a href="/">Home</a>
      </li>
      <li aria-current={page.url.pathname === "/me" ? "page" : undefined}>
        <a href="/me">Me</a>
      </li>
      <li aria-current={page.url.pathname === "/options" ? "page" : undefined}>
        <a href="/options">Options</a>
      </li>
    </ul>
  </nav>
</footer>
