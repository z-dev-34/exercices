// get only user who voted
export const filterOnlyVoted = (voters) => {
    return voters.filter(voter => voter.voted)
}
// filtrer les utilisateurs par leurs ages, donner un tableau qui contient les utilisateurs entre 18 ans et 25 ans de plus petit au plus grand
export const filterByAge = (arr) => {
    const filterUsers = arr.filter(user => user.age >= 18 && user.age <= 25)
    return filterUsers.sort((a, b) => a.age - b.age)
}