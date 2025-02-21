const token = window.localStorage.getItem("token");
const loginElement = document.getElementById("login-header");

if (token) {
  const body = document.body;
  const editMode = document.createElement("div");
  editMode.classList.add("edit-mode");
  editMode.innerHTML = `<i class="fa-regular fa-pen-to-square"></i><p>Mode édition<p>`;
  body.insertBefore(editMode, body.firstChild);

  const portfolio = document.getElementById("portfolio");
  const portfolioTitle = document.querySelector("#portfolio h2");

  const editProject = document.createElement("div");
  editProject.classList.add("edit-project");

  portfolio.insertBefore(editProject, portfolio.firstChild);
  editProject.appendChild(portfolioTitle);
  editProject.insertAdjacentHTML(
    "beforeend",
    `<a href="#" id="edit-btn" target="_blank"><i class="fa-regular fa-pen-to-square"></i><p>modifier</p></a>`
  );

  const filtersContainer = document.querySelector(".filters");
  filtersContainer.style.display = "none";

  loginElement.innerHTML = `<a href="#" id="logout-link">logout</a>`;
  const logoutLink = document.getElementById("logout-link");
  logoutLink.addEventListener("click", (event) => {
    event.preventDefault();
    window.localStorage.clear();
    window.location.reload();
  });
} else {
  loginElement.innerHTML = `<a href="login.html">login</a>`;
}
