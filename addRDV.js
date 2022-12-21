const add_patient_form = document.querySelector("#add_rdv_form");

add_rdv_form.addEventListener("submit", (e) => {
	e.preventDefault();

	// get user info

	db.collection("Patient").add({
		date: add_rdv_form.date.value,
		// e_med: add_rdv_form.e_med.value,
		e_pat: add_rdv_form.e_pat.value,

		//etat: add_rdv_form.etat.value,

		heure: add_rdv_form.heure.value,
	});
	add_rdv_form.reset();
});
