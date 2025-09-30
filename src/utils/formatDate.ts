import { format } from "date-fns"

export function formatDate(timestamp: string, formatString: string) {
  const date = new Date(timestamp)
  return format(date, formatString)
}
