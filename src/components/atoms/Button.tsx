interface ButtonProps {
  label: string
  onClick: () => void
  variant?: "home" | "sum" | "calculator" | "search" | "danger" | "success"
  fullWidth?: boolean
}

export default function Button({ label, onClick, variant = "home", fullWidth = false }: ButtonProps) {
  return (
    <button
      className={`btn ${variant}`}
      onClick={onClick}
      style={ fullWidth ? { width: "100%" } : {} }
    >
      {label}
    </button>
  )
}