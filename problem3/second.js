
const movies = [
    { title: 'The Dark Knight', genre: 'Action', year: 2008, rating: 9.0, director: 'Christopher Nolan' },
    { title: 'Inception', genre: 'Sci-Fi', year: 2010, rating: 8.8, director: 'Christopher Nolan' },
    { title: 'Pulp Fiction', genre: 'Crime', year: 1994, rating: 8.9, director: 'Quentin Tarantino' },
    { title: 'The Shawshank Redemption', genre: 'Drama', year: 1994, rating: 9.3, director: 'Frank Darabont' },
    { title: 'Interstellar', genre: 'Sci-Fi', year: 2014, rating: 8.6, director: 'Christopher Nolan' },
    { title: 'Fight Club', genre: 'Drama', year: 1999, rating: 8.8, director: 'David Fincher' },
    { title: 'The Godfather', genre: 'Crime', year: 1972, rating: 9.2, director: 'Francis Ford Coppola' },
    { title: 'Forrest Gump', genre: 'Drama', year: 1994, rating: 8.8, director: 'Robert Zemeckis' }
  ];
  
let filteredRecommendedMovies=[]
let Genre=[]
movies.sort((a,b)=>{
    if(filteredRecommendedMovies.length<4){
        return a.rating-b.rating
    }
})
movies.forEach(el=>{
    let obj={}
    const{title,genre,year,rating,director}=el
    const existingGenre = Genre.find(item => item.genre === genre);
    if(!existingGenre){
    obj.genre=genre
    obj.rating=rating
    Genre.push(obj)
    }
    else{
        for(let i=0;i<Genre.length;i++){
            if(Genre[i].genre===genre){
                Genre[i].rating=((rating+Genre[i].rating)/2)
            }
        }
    }

})

let topDirectors=[]

movies.forEach(el=>{
    const{title,genre,year,rating,director}=el
    let obj={}

    const existingGenre = topDirectors.find(item => item.director === director);
    if(!existingGenre){
      
      obj.director=director
      obj.movies=[]
      obj.movies.push({title:title,rating:rating})  
        //console.log(obj)
    topDirectors.push(obj)
    }
    else{
      for(let i=0;i<topDirectors.length;i++){
        if(topDirectors[i].director===director){
            topDirectors[i].movies.push({title:title,rating:rating})
            console.log(topDirectors[i])
        }
      }
    }

})