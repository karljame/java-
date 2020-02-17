fetch("https://ghibliapi.herokuapp.com/films")
.then(Response=>{
     return Response.json()
}).then(data =>{

    const movies = document.getElementById("movies")
    
    data.forEach(movie=>{
        console.log(movie)
        let moviediv = document.createElement("div")
        moviediv.innerHTML = '<div class="title">' + movie.title + '</div> <div class = "description">' + movie.description + '</div>' 
        movies.append(moviediv)

    });
})