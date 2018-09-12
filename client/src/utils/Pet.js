function Pet(obj){
  this.id = obj.id.$t;
  this.animal = obj.animal.$t;
  this.breed = obj.breeds.breed.$t;
  this.age = obj.age.$t;
  this.sex = obj.sex.$t;
  this.description = obj.description.$t;
  this.name = obj.name.$t;
  if(obj.media.photos){
    this.image = obj.media.photos.photo[2].$t
  }else{
    this.image = "http://placehold.it/200/200";
  }

}

export default Pet;
