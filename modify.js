const signupForm = document.querySelector("#signup_form");

signupForm.addEventListener("submit", (e) => {
	e.preventDefault();

	console.log(cred.user);

	db.collection("Diabtologue").doc("I5XIpAYtdkXNgNfyN3P9").update({
		Adresse: signup_form.Adresse.value,
		Nom: signup_form.Nom.value,

		NumTel: signup_form.NumTel.value,

		emailMed: signup_form.signup_email.value,
	});
	// close the signup modal & reset form

	signupForm.reset();
});
