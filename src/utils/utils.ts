export default function handleSearchClick() {
  const input = document.querySelector('#input') as HTMLInputElement;
  const inputValue = input.value.trim();
  localStorage.setItem('search_request', inputValue);
  return inputValue;
}
