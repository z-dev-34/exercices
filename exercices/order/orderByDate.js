// 
export const orderbyDateAsc = users => {
    return users.sort(
        (a, b) => {
            return new Date(a.createdAt) - new Date(b.createdAt)
        }
    )
}

export const orderbyDateDesc = users => {
    return users.sort(
        (a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        }
    )
}