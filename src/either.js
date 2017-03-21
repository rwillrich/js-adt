import taggedSum from './tagged-sum'

const Either = taggedSum('Either', {
  Left: ['e'],
  Right: ['a']
})

export const Left = Either.Left
export const Right = Either.Right

Either.of = Right

Either.prototype.map = function map(f) {
  return this.cata({
    Left: x => Left(x),
    Right: x => Right(f(x))
  })
}

export default Either
