// TODO: write your code here
export default class Team {
  constructor() {
    this.members = {};
  }

  addAll(...objs) {
    for (let i = 0; i < objs.length; i += 1) {
      const item = objs[i];
      this.members[i] = item;
    }
  }

  [Symbol.iterator](object) {
    let current = 0;
    const last = Object.keys(this.members).length - 1;
    return {
      next() {
        return current <= last
          ? { done: false, value: object[current += 1] }
          : { done: true };
      },
    };
  }
}
