const testRegex = (stringA, stringB) => {
  if (typeof(stringA) === "string" && typeof(stringB) === "string") {
    return new RegExp(stringA.toLocaleLowerCase()).test(stringB.toLocaleLowerCase())
  }
  return null
}

export default testRegex
