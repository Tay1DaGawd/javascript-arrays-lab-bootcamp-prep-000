const app = "I don't do much."
var Arrays = ["Milo", "Otis", "Garfield"]

function kittens() {
  var kittens = ["Milo", "Otis", "Garfield"]
  return kittens
}
function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten() {
  kittens.shift(1)
  return kittens
}
function appendKitten(name) {
  return [...kittens, "Broom"]
}
function prependKitten(name) {
  return ["Arnold", ...kittens]
}
function removeLastKitten() {
  return [kittens.slice(1)]
}
