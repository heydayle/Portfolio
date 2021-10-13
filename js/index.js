function copyToClipboard(value) {
  navigator.clipboard.writeText(value);

  alert("Copied the text: " + value);
}
