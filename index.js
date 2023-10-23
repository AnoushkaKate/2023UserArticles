// Referencing the article tile and article input elements. 
const expandingInputTitle = document.getElementById('expanding-input-title');
const expandingInputArticle = document.getElementById('expanding-input-article');

// Adding event listener to the article title input field so its height expands and the user types.
expandingInputTitle.addEventListener('input', function() {
  this.style.height = 'auto';

  this.style.height = this.scrollHeight + 'px';
});

// Adding event listener to the article input field so its height expands and the user types.
expandingInputArticle.addEventListener('input', function() {
  // reset hieght to auto
  this.style.height = 'auto';  
  // set the height based on the contents scroll height
  this.style.height = this.scrollHeight + 'px';
});

// Firebase configuration for initiallising Firebase App and firestore
const firebaseConfig = {
  apiKey: "AIzaSyC2GQhqdMkLxVmcRMhbu2MyukMhjk7_rI8",
  authDomain: "she-shoot-she-scores.firebaseapp.com",
  databaseURL: "https://she-shoot-she-scores-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "she-shoot-she-scores",
  storageBucket: "she-shoot-she-scores.appspot.com",
  messagingSenderId: "709319391076",
  appId: "1:709319391076:web:5c7825e020a7a77d2dac71",
  measurementId: "G-4VSGK7B0K4"
};

// initilise firestore for using the database
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();


// referencing various elements HTML doc. 
const modalWrapper = document.querySelector('.modal-wrapper');
const addModal = document.querySelector('.add-modal');
const addModalForm = document.querySelector('.add-modal .form');
const btnAdd = document.querySelector('.btn-add');

// Variable to store the selected article type. 
// Initially there is no selected article tyoe. 
let selectedArticleType = "";


// Event listeners ti set the selected article type based on which button the user submits with.
document.getElementById("playersArticles").addEventListener("click", function() {
selectedArticleType = this.getAttribute("data-type");
});

document.getElementById("leagueArticles").addEventListener("click", function() {
selectedArticleType = this.getAttribute("data-type");
});

document.getElementById("countryArticles").addEventListener("click", function() {
selectedArticleType = this.getAttribute("data-type");
});

document.getElementById("transfersArticles").addEventListener("click", function() {
selectedArticleType = this.getAttribute("data-type");
});

//Event listener for when the form in being submitted.
addModalForm.addEventListener('submit', e => {
  e.preventDefault();

  const articleValue = addModalForm.Article.value;

  // Data integrity condition. 
  if (articleValue.length >= 2500) {

    // if the article is atleast 2500 characters long, the article is added to the selected article type collection.
    db.collection(selectedArticleType).add({
      FirstName: addModalForm.FirstName.value,
      LastName: addModalForm.LastName.value,
      Email: addModalForm.Email.value,
      Title: addModalForm.Title.value,
      Article: addModalForm.Article.value,
    })
    .then (() => {
      // it is then also added to the UserArticles collection in the database.
      db.collection('UserArticles').add({
        FirstName: addModalForm.FirstName.value,
        LastName: addModalForm.LastName.value,
        Email: addModalForm.Email.value,
        Title: addModalForm.Title.value,
        Article: addModalForm.Article.value,
      })
      .then (()=> {
        //success message
        alert("Thank You For Your Article!")
      })
    })

  } else {
    // display error message if the article is too short. 
    alert("Article must be at least 2500 characters long.")
  }

});

