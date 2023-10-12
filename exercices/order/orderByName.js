const orderByName = users => {
    return users.sort(
        (a, b) => {
            return a.name.localeCompare(b.name)
        }
    )
}
export default orderByName;