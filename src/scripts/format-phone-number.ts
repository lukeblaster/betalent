export function formatPhoneNumber(number: string) {
  const part1 = number.slice(0, 2);
  const part2 = number.slice(2, 4);
  const part3 = number.slice(4, 9);
  const part4 = number.slice(9, 13);

  const formatedPhoneNumber =
    `+${part1}` + " " + `(${part2})` + " " + `${part3}-${part4}`;

  console.log(formatedPhoneNumber);

  return formatedPhoneNumber;
}
