const router = require("express").Router();
const petRoutes = require("./pets");
const axios = require('axios');


router.use("/pets", petRoutes);

router.route('/something')
    .all(function(req, res) {
        //console.log(req.body.searchTerm);
        //const{ body:{ searchTerm } } = req;
        const searchTerm = 'dog';
        const url = "http://api.petfinder.com/pet.find?format=json&key=f2ed227e8b882e795297e6092f7a50d4&location=85203&animal=" + searchTerm;
        
        axios.get(url).then((response)=> {
            res.json(response.data);
            console.log(response.data.petfinder.pets.pet[0].age.$t);
            
            var petName = response.data.petfinder.pets.pet[0].name.$t;
            console.log(`Pet Name ${petName}`);

            var petAnimal = response.data.petfinder.pets.pet[0].animal.$t;
            console.log(`Pet Animal ${petAnimal}`);

            var petPhoto = response.data.petfinder.pets.pet[0].media.photos.photo[0].$t;
            console.log(`Pet Photo ${petPhoto}`);
            
            var petAge = response.data.petfinder.pets.pet[0].age.$t;
            console.log(`Pet Age ${petAge}`);

            var petBreed = response.data.petfinder.pets.pet[0].breeds.breed.$t;
            console.log(`Pet Breed ${petBreed}`);

            var petSex = response.data.petfinder.pets.pet[0].sex.$t;
            console.log(`Pet Sex ${petSex}`);

            var petContact = response.data.petfinder.pets.pet[0].contact.email.$t;
            console.log(`Pet Contact ${petContact}`);

            var petShots = response.data.petfinder.pets.pet[0].options.option[1].$t;
            console.log(`Pet Shots ${petShots}`);

            var petDescription = response.data.petfinder.pets.pet[0].description.$t;
            console.log(`Pet Description ${petDescription}`);

        })
        .catch((err) => {
            if (err) throw err
        });
    })

module.exports = router;
