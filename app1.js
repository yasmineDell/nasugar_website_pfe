const add_patient_form = document.querySelector("#add_patient_form");

add_patient_form.addEventListener("submit", (e) => {
	e.preventDefault();

	// get user info

	db.collection("Patient").add({
		DateNais: add_patient_form.DateNais.value,
		Email: add_patient_form.Email.value,
		Name: add_patient_form.Name.value,

		NumTel: add_patient_form.NumTel.value,

		poids: add_patient_form.poids.value,

		type: add_patient_form.type.value,
	});
	add_patient_form.reset();
});
