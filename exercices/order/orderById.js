// retourner les users by id (de plus grand ou plus petit)
const orderById = users => {
    return users.sort(
        (a, b) => {
            return b.id - a.id
        }
    )
}
export default orderById;