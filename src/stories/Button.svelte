<script lang="ts">
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
  function getClassName() {
    let className = "bg-gray-100";
    switch (variant) {
      case "primary":
        className = "bg-primary text-white";
        break;
      case "success":
        className = "bg-success";
        break;
      case "error":
        className = "bg-error";
        break;
    }
    if (disabled) className = "bg-disabled";
    return className;
  }
</script>

<button
  {...props}
  type="button"
  {disabled}
  class={[
    props.class,
    getClassName(),
    "rounded-xl text-lg p-2 shadow-2xs",
  ].join(" ")}
>
  {label}
</button>
