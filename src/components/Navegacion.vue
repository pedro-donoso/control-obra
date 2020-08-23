 <template>
 <div>
    <!-- navbar bootstrap -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
      <a class="navbar-brand ml-5" href="#">Versión de Avance</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item mr-5">
              <router-link to="/user">Obras</router-link>
            </li>
             <li class="nav-item mr-5">
              <router-link to="/posts">Revisión</router-link>
            </li>
              <li class="nav-item mr-5">
              <router-link to="/comments">Detalles</router-link>
            </li>
              <li class="nav-item mr-5">
              <router-link to="/albums">Etapas</router-link>
            </li>
            <li class="nav-item mr-5">
              <router-link to="/todos">Avance</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- navbar bootstrap -->  
 </div>
 </template>
 
 
