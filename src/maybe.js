import taggedSum from './tagged-sum'

const Maybe = taggedSum('Maybe', {
  Nothing: [],
  Just: ['a']
})

export const Nothing = Maybe.Nothing
export const Just = Maybe.Just

Maybe.of = Just

Maybe.prototype.map = function map(f) {
  return this.cata({
    Nothing: () => Nothing(),
    Just: x => Just(f(x))
  })
}

export default Maybe
