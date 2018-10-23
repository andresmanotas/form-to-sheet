const script_url =
  "https://script.google.com/macros/s/AKfycbxN-djmgBS1wIvuXMbzZoSP02daabXKTVTI7CoM1jDQwX_d0wk/exec";
function insert_value() {
	const name = $("#name").val();
	const age = $("#age").val();
	const tel = $("#tel").val();
	const dni = $("#dni").val();
	const email = $("#email").val();

	const url = `${script_url}?callback=ctrlq&name=${name}&age=${age}&email=${email}&tel=${tel}&dni=${dni}&action=insert`;
	const request = jQuery.ajax({
		crossDomain: true,
		url,
		method: "GET",
		dataType: "jsonp",
	});
	document.getElementById("resetForm").reset();
	window.location.href = "../thanks.html";
}
function ctrlq(e) {
	alert("Congrats! Registered Successfully");
}
