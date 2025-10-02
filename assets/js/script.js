function includeHTML() {
  const includes = document.querySelectorAll('[id$="-placeholder"]');

  includes.forEach((el) => {
    const file = 'partials/' + el.id.replace('-placeholder', '.html');

    fetch(file)
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
      })
      .then((data) => {
        el.innerHTML = data;
      })
      .catch((err) => console.log(err));
  });
}

document.addEventListener('DOMContentLoaded', function () {
  document.body.style.display = 'block';
  includeHTML();
});
