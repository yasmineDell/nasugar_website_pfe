const add_medic_form = document.querySelector("#add_medic_form");

add_medic_form.addEventListener("submit", (e) => {
	e.preventDefault();

	// get medicament info

	db.collection("Medicaments").add({
		NomMedicament: add_medic_form.NomMedicament.value,
		Period: add_medic_form.Period.value,
		Time: add_medic_form.Time.value,

		dose: add_medic_form.dose.value,

		email: "test@gmail.com",
	});
	add_medic_form.reset();
});
