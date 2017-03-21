import tagged from './tagged'

const sumProto = {
  cata(fs) {
    return fs[this.constructor.name](...Object.values(this))
  }
}

const taggedSum = (typeName, tags) => {
  const sum = function sum() {}

  sum.prototype = Object.create(sumProto, {
    constructor: {
      writable: true,
      enumerable: false,
      configurable: true,
      value: sum
    }
  })

  Object.keys(tags).forEach(tagName => {
    const fields = tags[tagName]
    const tag = tagged(tagName, fields)
    tag.prototype = Object.create(sum.prototype, {
      constructor: {
        writable: true,
        enumerable: false,
        configurable: true,
        value: tag
      }
    })
    sum[tagName] = tag
  })

  Object.defineProperty(sum, 'name', {
    writable: false,
    enumerable: false,
    configurable: true,
    value: typeName
  })

  return sum
}

export default taggedSum
