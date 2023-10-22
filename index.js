const expandingInputTitle = document.getElementById('expanding-input-title');
const expandingInputArticle = document.getElementById('expanding-input-article');


expandingInputTitle.addEventListener('input', function() {
  this.style.height = 'auto';

  this.style.height = this.scrollHeight + 'px';
});

expandingInputArticle.addEventListener('input', function() {
  this.style.height = 'auto';

  this.style.height = this.scrollHeight + 'px';
});

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

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();



const modalWrapper = document.querySelector('.modal-wrapper');
const addModal = document.querySelector('.add-modal');
const addModalForm = document.querySelector('.add-modal .form');


const btnAdd = document.querySelector('.btn-add');

let selectedArticleType = "";

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

addModalForm.addEventListener('submit', e => {
  e.preventDefault();

  const articleValue = addModalForm.Article.value;

  if (articleValue.length >= 2500) {

    db.collection(selectedArticleType).add({
      FirstName: addModalForm.FirstName.value,
      LastName: addModalForm.LastName.value,
      Email: addModalForm.Email.value,
      Title: addModalForm.Title.value,
      Article: addModalForm.Article.value,
    })
    .then (() => {
      db.collection('UserArticles').add({
        FirstName: addModalForm.FirstName.value,
        LastName: addModalForm.LastName.value,
        Email: addModalForm.Email.value,
        Title: addModalForm.Title.value,
        Article: addModalForm.Article.value,
      })
      .then (()=> {
        alert("Thank You For Your Article!")
      })
    })

  } else {
    alert("Article must be at least 2500 characters long.")
  }

});

