 <template>
 <div>
    <!-- navbar bootstrap -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
      <a class="navbar-brand ml-5" href="#">JsonPlaceholder</a>
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
              <router-link to="/user">User</router-link>
            </li>
             <li class="nav-item mr-5">
              <router-link to="/posts">Posts</router-link>
            </li>
              <li class="nav-item mr-5">
              <router-link to="/comments">Comments</router-link>
            </li>
              <li class="nav-item mr-5">
              <router-link to="/albums">Albums</router-link>
            </li>
            <li class="nav-item mr-5">
              <router-link to="/todos">Todos</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- navbar bootstrap -->  
 </div>
 </template>
 
 
