const template = document.createElement('template');

template.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
<div class="container-fluid">
  <a class="navbar-brand" href="#"><p style="font-size:40px">Python</p></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav me-auto">
      <li class="nav-item">
        <a class="nav-link active" href="#">Home
          <span class="visually-hidden">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Basic</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Intermediate</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Advanced</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Linear Search</a>
          <a class="dropdown-item" href="#">Binary Search</a>
          <a class="dropdown-item" href="#">Other Sorting Algorithm</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Separated link</a>
        </div>
      </li>
    </ul>
    <form class="d-flex">
      <input class="form-control me-sm-2" type="text" placeholder="Search">
      <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</div>
</nav>




<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>



`;

document.body.appendChild(template.content);