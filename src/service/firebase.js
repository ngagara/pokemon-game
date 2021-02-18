import firebase from 'firebase/app';
import 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyBXGcXsP4iehbiFWsf_ALlyyL39uqtJ5v0",
  authDomain: "pokemon-game-bec3c.firebaseapp.com",
  databaseURL: "https://pokemon-game-bec3c-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-bec3c",
  storageBucket: "pokemon-game-bec3c.appspot.com",
  messagingSenderId: "242838864798",
  appId: "1:242838864798:web:7cbfa3c24a48507388cc8f"
};

firebase.initializeApp(firebaseConfig);

class Firebase {
  constructor() {

    this.fire = firebase
    this.database = this.fire.database();

  }

  getPokemonSocket = (cb) => {

    this.database.ref('pokemons').on('value', (snapshot) => {
      cb(snapshot.val())
    });

  }

  postPokemon = (key, pokemon) => {

    return this.database.ref(`pokemons/${key}`).set(pokemon);

  }

  addPokemon = (data) => {

    const newKey = this.database.ref().child('pokemons').push().key;
    this.database.ref("pokemons/" + newKey).set(data)

  }


}

export default Firebase;