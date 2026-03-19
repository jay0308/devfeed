export const formatDate = (date: Date, format: string = "dd/mm/yyyy") => {
    date = new Date(date);
    if (!date || isNaN(date.getTime())) return ""
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    switch (format) {
        case "dd/mm/yyyy":
            return `${day}/${month}/${year}`
        case "mm/dd/yyyy":
            return `${month}/${day}/${year}`
        case "yyyy/mm/dd":
            return `${year}/${month}/${day}`
        default:
            return new Date(date).toLocaleDateString()
    }
}