export const formatToSend = filters => {
  const finalObject = {}
  for (const filterItem in filters) {
    const filter = filters[filterItem]
    finalObject[filter.name] = filter.value
  }
  return finalObject
}
