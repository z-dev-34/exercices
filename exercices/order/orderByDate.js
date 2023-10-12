// 
export const orderbyDateAsc = users => {
    return users.sort(
        (a, b) => {
            return new Date(a.date) - new Date(b.date)
        }
    )
}

export const orderbyDateDesc = users => {
    return users.sort(
        (a, b) => {
            return new Date(b.date) - new Date(a.date)
        }
    )
}