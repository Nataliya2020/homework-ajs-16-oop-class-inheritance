export default class Character {
  constructor(name, type) {
    if (!name || !type) {
      throw new Error('Данных нет');
    }

    if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Данные некорректны');
    }

    const allowedType = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    let count = 0;

    allowedType.forEach((item) => {
      if (type === item) {
        this.type = type;
      } else {
        count += 1;
      }
    });

    if (count === allowedType.length) {
      throw new Error('Данные некорректны');
    }
    this.health = 100;
    this.level = 1;
  }
}
