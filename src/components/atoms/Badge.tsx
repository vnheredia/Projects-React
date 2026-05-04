interface BadgeProps {
  text: string
  type?: "genre" | "rating"
}

export default function Badge({ text, type = "genre" }: BadgeProps) {
  const styles: React.CSSProperties = {
    display: "inline-block",
    padding: "2px 8px",
    borderRadius: "12px",
    fontSize: "0.75rem",
    fontWeight: 500,
    background: type === "rating" ? "#fff3cd" : "#e8f4f8",
    color: type === "rating" ? "#856404" : "#0c5460",
    border: `1px solid ${type === "rating" ? "#ffc107" : "#bee5eb"}`,
  }

  return <span style={styles}>{text}</span>
}