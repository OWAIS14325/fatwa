<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow">
    <div class="container">
      <a class="navbar-brand" href="#">
          <img src="https://i.imgur.com/PSXxjNY.png" alt="" width="35" class="rounded-circle">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav me-auto">
          <a class="nav-link active border-bottom" aria-current="page" href="#">Home</a>
          <a class="nav-link" aria-current="page" href="#">Works</a>
        </div>
        <form class="d-flex">
            <div class="rounded-pill bg-light d-flex">
                <input type="text" class="form-control rounded-pill border-0 outiline-0 bg-transparent shadow-none py-1" placeholder="Rechercher..." aria-label="Search ...">
                <span class="pe-2 pt-1 pb-1"> <i class="fas fa-search text-muted"></i> </span>
            </div>
          </form>
      </div>
    </div>
  </nav>
</template>