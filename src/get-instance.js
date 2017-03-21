const getInstance = (obj, constructor) => {
  return obj instanceof constructor
    ? obj
    : Object.create(constructor.prototype)
}

export default getInstance
