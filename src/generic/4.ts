/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface IComponent <T> {
  props: T;
}

class Component<T> implements IComponent<T>  {
  
  constructor (public props:T) {

  }
}

class Page<T> extends Component<T> {
  pageInfo () {
    console.log(this.props);
  }
}

export {};