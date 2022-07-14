const a1: number = 1;
const a2: string = '1';
const a3: boolean = true;
const a4: undefined = undefined;
const a5: null = null;
const a6: object = {};
const a7: number[] = [1, 2];
const a8: Array<number> = [1, 2];
// 元祖实际应用？
const a9: [string, number] = ['1', 2];
// 枚举实际应用？
enum a10 {
  my,
  mine,
}
const a11: any = 1;
const a12: void = undefined;
const a13 = (): void => {};
const a14 = (): never => {
  throw new Error('1');
};
const a15: any = 1;
const a151 = (<string>a15).length;
const a16: Array<number | string> = [1, '2', 1, '3'];
function identity<T>(arg: T): T {
  return arg;
}
// 重载签名
function add(x: string, y: string): string;
function add(x: number, y: number): number;

//实现签名 对外不可见
function add(x: string | number, y: number | string): number | string {
  if (typeof x === 'string') {
    return x + ',' + y;
  } else {
    return x.toFixed() + (y as number).toFixed();
  }
}
let x = add('1', '2'); // string
let y = add(2, 3); // number
