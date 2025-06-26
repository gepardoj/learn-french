<script lang="ts">
  interface Props {
    variant?: "primary" | "success" | "error";
    disabled?: boolean;
    /** How large should the button be? */
    size?: "small" | "medium" | "large";
    /** Button contents */
    icon: string;
  }

  const { variant, disabled, size = "medium", icon }: Props = $props();
  function getClassName() {
    let className = "stroke-svg fill-svg";
    switch (variant) {
      case "primary":
        className = "stroke-primary fill-primary";
        break;
      case "success":
        className = "stroke-success fill-success";
        break;
      case "error":
        className = "stroke-error fill-error";
        break;
    }
    if (disabled) className = "stroke-disabled fill-disabled";
    return className;
  }
</script>

<svg
  class={[
    size === "small" ? "w-4 h-4" : "",
    size === "medium" ? "w-6 h-6" : "",
    size === "large" ? "w-8 h-8" : "",
    getClassName(),
  ]}>{@html icon}</svg
>
