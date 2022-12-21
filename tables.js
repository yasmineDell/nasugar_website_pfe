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

i = 0;
db.collection("Patient")
	.get()
	.then((snapshot) => {
		snapshot.docs.forEach((doc) => {
			// renderAccount(doc);

			test(doc, i);
			i++;
		});
	});
const accountList = document.querySelector("#tbl_account_list");
function test(doc, i) {
	let data = doc.data();

	let row = `<tr>
  
    <tr>
             <td ><a id="fullname" name="fullname" href="Profile_patient.html">${data.Name} </a></td>

                  <td id="type" name="type">${data.type}</td>          
                  <td id="email" name="email">${data.Email}</td>          
                  <td id="phone" name"phone">${data.NumTel}</td>          


            </tr>`;

	let table = document.getElementById("tbl_account_list");
	table.innerHTML += row;
	c = document.getElementById("email").innerHTML;

	document.getElementById("email").id = "email" + i;
	console.log("email" + i);
	console.log(c);
}

function renderAccount(doc) {
	let tr = document.createElement("tr");
	let Name = document.createElement("td");
	let type = document.createElement("td");
	let Email = document.createElement("td");
	let NumTel = document.createElement("td");

	// let td_uni_id = document.createElement('td');

	tr.setAttribute("data-id", doc.id);

	Name.textContent = doc.data().Name;
	type.textContent = doc.data().type;
	Email.textContent = doc.data().Email;
	NumTel.textContent = doc.data().NumTel;

	// td_uni_id.textContent = doc.data().NumTel;
	tr.appendChild(Name);
	tr.appendChild(type);
	tr.appendChild(Email);
	tr.appendChild(NumTel);

	// tr.appendChild(td_uni_id);

	accountList.appendChild(tr);
}
