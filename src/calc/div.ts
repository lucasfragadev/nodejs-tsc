export default function div (a: number, b: number): number | undefined {
  if (b === 0) {
    console.log('Divisão por zero.');
    return undefined;
  } else {
    return a / b;
  }
};
