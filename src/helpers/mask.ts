export function cepMask(e: string) {
  let value = e;
  if (value.length > 9) {
    value = value.slice(0, -1);
  }
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{5})(\d)/g, "$1-$2");
  return value;
}

export function phoneMaskGlobal(e: string) {
  let value = e;
  if (value.length > 17) {
    value = value.slice(0, -1);
  }
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{2})(\d{2})(\d{5})(\d{4})/g, "+$1 $2 $3-$4");
  return value;
}

export function phoneMask(e: string) {
  let value = e;
  if (value.length > 15) {
    value = value.slice(0, -1);
  }
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{2})(\d{5})/g, "($1) $2");
  value = value.replace(/^\((\d{2})\) (\d{5})(\d{4})/g, "($1) $2-$3");
  return value;
}

export function cpfMask(e: string) {
  let value = e;
  if (value.length > 14) {
    value = value.slice(0, -1);
  }
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{3})(\d{3})/g, "$1.$2");
  value = value.replace(/^(\d{3}).(\d{3})(\d{3})/g, "$1.$2.$3");
  value = value.replace(/^(\d{3}).(\d{3}).(\d{3})(\d{2})/g, "$1.$2.$3-$4");
  return value;
}

export const moneyMask = (e: string) => {
  let value = e;
  value = value.replace(".", "").replace(",", "").replace(/\D/g, "");
  if (Number(value) > 100000000000) {
    value = value.slice(0, -1);
  }
  const options = { minimumFractionDigits: 2 };
  const result = new Intl.NumberFormat("pt-BR", options).format(
    parseFloat(value) / 100
  );
  e = `R$ ${result}`;
  if (result === "NaN") e = "";
  return e;
};

export const percentageMask = (e: string, key?: string) => {
  let value = e;
  value = value.replace(".", "").replace(",", "").replace(/\D/g, "");
  if (key === "Backspace" || Number(value) > 10000) {
    value = value.slice(0, -1);
  }
  const options = { minimumFractionDigits: 2 };
  const result = new Intl.NumberFormat("pt-BR", options).format(
    parseFloat(value) / 100
  );
  e = `${result}%`;
  if (result === "NaN") e = "";
  return e;
};

export function cnpjMask(e: string) {
  let value = e;
  if (value.length > 18) {
    value = value.slice(0, -1);
  }
  value = value.replace(/\D/g, "");
  value = value.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
    "$1.$2.$3/$4-$5"
  );
  return value;
}

export function numberMask(e: string) {
  let value = e;
  if (value.length > 10) {
    value = value.slice(0, -1);
  }
  value = value.replace(/\D/g, "");
  return value;
}

export function dateMask(e: string) {
  let value = e;
  if (value.length > 10) {
    value = value.slice(0, -1);
  }
  value = value.replace(/\D/g, "").slice(0, 10);
  value = value.replace(/^(\d{2})(\d{2})(\d{4})/g, "$1/$2$3");
  return value;
}

export function hourMask(e: string) {
  let value = e;
  if (value.length > 5) {
    value = value.slice(0, -1);
  }
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{2})(\d{2})/g, "$1:$2");
  return value;
}
