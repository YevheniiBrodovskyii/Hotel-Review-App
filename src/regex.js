export const validEmail = new RegExp(
  /(\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)/gm
);

export const validSymbols = new RegExp(
  /[|\\/~^:,;?!&%$@*+]/
);

export const validLetters = new RegExp(
  "^[a-zA-Z]"
);
