window.addEventListener("load", () => {
	const params = new URL(document.location).searchParams;

	const email = params.get("email0");

	document.getElementById("email-re").innerHTML = email;
	console.log(email);
});

var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("&");
for (var i = 0; i < queries.length; i++) {
	document.write(queries[i] + "<br>");
}

// var favoritemovie = "e";
// sessionStorage.setItem("favoriteMovie", favoritemovie);

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
	apiKey: "AIzaSyDPVIEZnnWIRX0fCOa6I2Cdv_ecQDIQYqY",
	authDomain: "myfb-f304c.firebaseapp.com",
	projectId: "myfb-f304c",
	storageBucket: "myfb-f304c.appspot.com",
	messagingSenderId: "136371102543",
	appId: "1:136371102543:web:8a4847f99fdea7a1cadb3a",
	measurementId: "G-CN89WMMXS9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

//   db.collection('Patient').where("e_med","==","jhg").get().then((snapshot) => {
//     snapshot.docs.forEach(doc => {
//         renderAccount(doc);
//     })
// }

db.collection("rendez-vous")
	.where("etat", "==", "comfirmer")
	.get()
	.then((querySnapshot) => {
		//   snapshot.docs.forEach(doc => {
		//      // renderAccount(doc);
		//      test(doc);
		//   })

		const data = querySnapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		}));

		console.log(data[0].date);
		let row = `<tr>
  
  <tr>

                <td id="type" name="type">${data[0].date}</td>          
            
                <td id="type" name="type">${data[0].heure}</td>  


          </tr>`;
		let table = document.getElementById("tbl_account_list");
		table.innerHTML += row;
	});
function test(doc) {
	// let data = doc.data();
	let row = `<tr>
  
      <tr>
  
                    <td id="type" name="type">${data.date}</td>          
                
  
  
              </tr>`;
	let table = document.getElementById("tbl_account_list");
	table.innerHTML += row;
}
