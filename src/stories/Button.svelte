<script lang="ts">
  import "./button.css";

  interface Props {
    /** Is this the principal call to action on the page? */
    variant?: "primary" | "success" | "error";
    class?: string;
    disabled?: boolean;
    /** What background color to use */
    backgroundColor?: string;
    /** How large should the button be? */
    size?: "small" | "medium" | "large";
    /** Button contents */
    label: string;
    /** The onclick event handler */
    onclick?: () => void;
  }

  const {
    variant,
    disabled,
    backgroundColor,
    size = "medium",
    label,
    ...props
  }: Props = $props();
</script>

<button
  {...props}
  type="button"
  {disabled}
  class={[
    props.class,
    "bg-amber-50",
    variant === "primary" ? "bg-primary text-white" : "",
    variant === "success" ? "bg-success" : "",
    variant === "error" ? "bg-error" : "",
    disabled ? "bg-disabled" : "",
    "storybook-button",
    `storybook-button--${size}`,
  ].join(" ")}
>
  {label}
</button>
