const orderByName = (users) => {
  return users.sort((a, b) => a.name.localeCompare(b.name));
};
export default orderByName;
