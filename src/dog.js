// @flow

class Dog {
  name: string

  constructor(name: string) {
    this.name = name
  }

  bark() {
    return `Wah Wah I am a ${this.name}`
  }

}

export default Dog
