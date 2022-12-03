export function classValidated(
  option: string,
  next: boolean,
  selectOption = ""
) {
  if (next && !selectOption) return "error";

  if (selectOption === option) return "selected";
  return "not-selected";
}
