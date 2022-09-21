interface DropdownItem<T> {
    value: T;
    selected: boolean;
  }
  
  interface Email {
    value: string;
    selected: boolean;
  }
  
  const emails: DropdownItem<string>[] = [
    { value: 'naver.com', selected: true },
    { value: 'gmail.com', selected: false },
    { value: 'hanmail.net', selected: false },
  ];
  
  interface ProductNumber {
    value: number;
    selected: boolean;
  }
  
  interface TrueFalse {
    value: boolean;
    selected: boolean;
  }
  
  const numberOfProducts: DropdownItem<number>[] = [
    { value: 1, selected: true },
    { value: 2, selected: false },
    { value: 3, selected: false },
  ];