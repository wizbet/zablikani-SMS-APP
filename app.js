//Unique Firebase Object



const firebaseConfig = {
  apiKey: "AIzaSyC0reEik7-SZRFQkLhK-TSs-W3hEXaSOzs",
  authDomain: "zablikanisms.firebaseapp.com",
  projectId: "zablikanisms",
  storageBucket: "zablikanisms.firebasestorage.app",
  messagingSenderId: "773613868831",
  appId: "1:773613868831:web:7d5ce8b0210fe0fe11422a"
};
  
  //Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();
  
  //Variable to access database collection
  const db = firestore.collection("customerDetails");
  
  //Get Submit Form
  let submitButton = document.getElementById("submit");
  
  //Create Event Listener To Allow Form Submission
  submitButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault();
  
    //Get Form Values
    let Cname = document.getElementById("Cname").value;
    let previous = document.getElementById("Cprevious").value;
    let cash = document.getElementById("Ccash").value;
    let momopay = document.getElementById("Cmomopay").value;
    let currentamt = document.getElementById("Ccurrent").value;
    let costamt = document.getElementById("Ccost").value;
    let balance = document.getElementById("Cbalance").value;
    let date = document.getElementById("date").value;
    firestore
      .collection("contactInfo")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          const Cname = doc.data().Cname;
          const previous = doc.data().previous;
          const cash = doc.data().cash;
          const momopay = doc.data().momopay;
          const currentamt = doc.data().currentamt;
          const costamt = doc.data().costamt;
          const balance = doc.data().balance;
          const date = doc.data().date;
          if (customername === customername) {
            console.log("Already Exists");
          }
  
          // console.log("data", doc.data().fname);
        });
      });
    //Save Form Data To Firebase
    db.doc()
      .set({
        Cname: Cname,
        previous: previous,
        cash: cash,
        momopay: momopay,
        currentamt: currentamt,
        costamt: costamt,
        balance:balance,
        date:date
      })
      .then(() => { })
      .catch((error) => {
        console.log(error);
      });
  
    //alert
    alert("Your Form Has Been Submitted Successfully");
  
    //clear form after submission
    function clearForm() {
      document.getElementById("clearFrom").reset();
    }
    clearForm()
  });