<template>
  <div class="container-fluid" id="post">
      <h6 class="post__title">Lista de posts</h6>

      <div class="post__buscador">
           <input type="text" placeholder="Añadir post" v-model="nuevopost">
       
          <button class="btn-sm btn-primary" @click="agregarpost">Agregar</button> 
      </div>
    
          
          <div class="container post__for">
              <div v-for="(post, $index) in posts" :key="post.id">
              <h6>{{post.title}}<button class="btn-sm btn-danger ml-3" @click="eliminarpost($index)">Eliminar</button></h6>
          </div> 
          </div>
         
  </div>
</template>

<script>
export default {
    name: 'posts',
    created(){
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(respuesta => respuesta.json())
        .then(datos => this.posts = datos)
        .catch(error => console.error(error));
    },
    data(){
        return{
            posts: [],
            nuevopost: '',
        }
    },
    methods: {
        agregarpost(){
            this.posts.unshift({title: this.nuevopost});
            this.nuevopost = '';
        },
        eliminarpost(indice){
            this.posts.splice(indice, 1)
        }
    }
}
</script>
