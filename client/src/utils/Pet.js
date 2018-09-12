function Pet(obj){
  this.id = obj.id.$t;
  this.animal = obj.animal.$t;
  this.breed = obj.breeds.breed.$t;
  this.age = obj.age.$t;
  this.sex = obj.sex.$t;
  this.image = obj.media.photos.photo[0].$t;
  this.description = obj.description.$t;
  this.name = obj.name.$t;
}

export default Pet;
