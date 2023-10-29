export default function handleSearchClick() {
  const input = document.querySelector('#input') as HTMLInputElement;
  const inputValue = input.value;
  localStorage.setItem('search_request', inputValue.trim());
}
