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

db.collection("rendez-vous")
	.where("etat", "==", "demande")
	.get()
	.then((querySnapshot) => {
		const data = querySnapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		}));

		console.log(data.length);

		for (i = 0; i <= data.length; i++) {
			let row = `<tr>
    
        <tr>
      
                      <td>
                      <div class="card w-75">
                      <div class="card-body">
                        <h5 class="card-title">Demande par ${data[i].e_pat} </h5>
                        <p class="card-text">${data[i].date}     \t  heure: ${data[i].heure} </p>
                        <br>
                        <a href="#" class="btn btn-success"style="color: #F9F9F9;" onclick="update()" >Accept</a>
                        <a href="#" class="btn btn-danger" style="color: #F9F9F9;">Refuser</a>
    
                      </div>
                      
                      
                      </td>          
                  
      
      
                </tr>`;
			let table = document.getElementById("card");
			table.innerHTML += row;
		}
	});

function renderrdv(doc) {
	let tr = document.createElement("tr");
	let nom = document.createElement("td");
	let date = document.createElement("td");
	// let heure = document.createElement('td');

	// let td_uni_id = document.createElement('td');

	tr.setAttribute("data-id", doc.id);

	nom.textContent = doc.data().nom;
	date.textContent = doc.data().date;

	// td_uni_id.textContent = doc.data().NumTel;
	tr.appendChild(nom);
	tr.appendChild(date);
	// tr.appendChild(td_uni_id);

	accountList.appendChild(tr);
}

function update(id) {
	console.log("update");

	const rdv = firebase.firestore().collection("rendez-vous").doc(id);

	rdv
		.update({
			etat: "comfirmer",
		})
		.then(() => {
			console.log("Document updated"); // Document updated
		})
		.catch((error) => {
			console.error("Error updating doc", error);
		});
}
