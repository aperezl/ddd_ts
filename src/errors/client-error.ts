export class MissingFormalParameters extends Error {
  constructor (public name: string) {
    super(`Error In The Parameter: ${name}`)
  }
}
