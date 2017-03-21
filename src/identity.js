import tagged from './tagged'

const Identity = tagged('Identity', ['a'])

Identity.prototype.map = function map(f) {
  return Identity(f(this.a))
}

export default Identity
