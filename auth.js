// signup
const signupForm = document.querySelector("#signup_form");

signupForm.addEventListener("submit", (e) => {
	e.preventDefault();

	// get user info
	const email = signupForm["signup_email"].value;
	const password = signupForm["signup-password"].value;

	//   console.log(email,password)

	// sign up the user
	auth.createUserWithEmailAndPassword(email, password).then((cred) => {
		console.log(cred.user);

		db.collection("Diabtologue").add({
			Adresse: signup_form.Adresse.value,
			Nom: signup_form.Nom.value,

			NumTel: signup_form.NumTel.value,

			emailMed: signup_form.signup_email.value,
		});
		// close the signup modal & reset form

		signupForm.reset();
	});

	//  form.Nom.value = '';
	//   form.signup_email.value = '';
	//   form.NumTel.value = '';

	//   form.Adresse.value = '';
});

// function createProf(){

//   // saving data
//   signup_formaddEventListener('submit', (e) => {
//     e.preventDefault();
//     db.collection('Diabtologue').add({
//         Nom: signup_form.Nom.value,

//       NumTel: signup_form.NumTel.value,

//       emailMed: signup_form.signup_email.value,
//       Adresse: signup_form.Adresse.value,

//   });
//   signup_form.Nom.value = '';
//   signup_form.signup_email.value = '';
//   signup_form.NumTel.value = '';

//   signup_form.Adresse.value = '';

// });
// }

// logout
// const logout = document.querySelector('#logout');
// logout.addEventListener('click', (e) => {
//   e.preventDefault();
//   auth.signOut().then(() => {
//     console.log('user signed out');
//   })
// });
