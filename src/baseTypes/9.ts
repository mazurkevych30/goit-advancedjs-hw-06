/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/

type AcocountsName = string[];
type DetailsDate = {
  createAt: Date,
  updateAt: Date
}

type Pages = {
  title: string,
  likes: number,
  accounts: AcocountsName,
  status: string,
  details?: DetailsDate
}

const page1: Pages = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2: Pages = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}

export {};