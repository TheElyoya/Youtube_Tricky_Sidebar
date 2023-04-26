const toggleButton = document.querySelector("[data-toggle-aside]");
const sidebar = document.querySelector(".sidebar");
const listItems = document.querySelectorAll(".sidebar-list-item");
toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

listItems.forEach((listItem) => {
  listItem.addEventListener("click", () => {
    listItems.forEach((li) => {
      li.classList.remove("active");
    });
    listItem.classList.add("active");
  });
});
