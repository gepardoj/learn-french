<script lang="ts">
  interface Props {
    variant?: "primary" | "success" | "error";
    class?: string;
    disabled?: boolean;
    /** How large should the button be? */
    size?: "small" | "medium" | "large";
    /** Button contents */
    icon: string;
    alt: string;
    /** The onclick event handler */
    onclick?: () => void;
  }

  const {
    variant,
    disabled,
    size = "medium",
    icon,
    alt,
    ...props
  }: Props = $props();
</script>

<button
  {...props}
  type="button"
  {disabled}
  class={[props.class, "w-fit h-fit"].join(" ")}
>
  <svg
    class={[
      size === "small" ? "w-4 h-4" : "",
      size === "medium" ? "w-6 h-6" : "",
      size === "large" ? "w-8 h-8" : "",
      "stroke-svg",
      variant === "primary" && !disabled ? "stroke-primary text-white" : "",
      variant === "success" && !disabled ? "stroke-success" : "",
      variant === "error" && !disabled ? "stroke-error" : "",
      disabled ? "stroke-disabled" : "",
    ]}>{@html icon}</svg
  >
</button>
