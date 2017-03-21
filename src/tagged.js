import getInstance from './get-instance'

const tagged = (tagName, fields = []) => {
  const tag = function tag(...values) {
    return fields.reduce((self, field, i) => {
      self[field] = values[i]
      return self
    }, getInstance(this, tag))
  }

  Object.defineProperty(tag, 'name', {
    writable: false,
    enumerable: false,
    configurable: true,
    value: tagName
  })

  return tag
}

export default tagged
