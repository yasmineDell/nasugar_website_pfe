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

document.getElementById("file").addEventListener("change", (event) => {
	const file = event.target.files[0];
	const storageRef = firebase.storage().ref("test/" + file.name);

	storageRef.put(file).on("state_changed", (snapshot) => {
		const progress = (snapshot.bytesTransferred / snapshot.totalbytes) * 100;
		console.log(progress);
		const progressBar = document.getElementById("progress_bar");
		progressBar.value = progress;
	});

	storageRef.getDownloadURL().then(function (url) {
		const image = document.getElementById("image");
		console.log(url);
		image.src = url;
	});
});
