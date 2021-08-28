import Character from '../basic';
import Team from '../app';

test('should check iterator', () => {
  const one = new Character('Ann', 'Bowerman');
  const two = new Character('Winter', 'Daemon');
  const three = new Character('Autumn', 'Magician');
  const members = new Team();
  members.addAll(one, two, three);
  const iterator = members[Symbol.iterator](members.members);
  const result = iterator.next().value;

  expect(result).toEqual({
    attack: 25, defence: 25, health: 50, level: 1, name: 'Winter', type: 'Daemon',
  });
});
