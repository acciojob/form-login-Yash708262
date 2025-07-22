function getFormvalue() {
     event.preventDefault();
	 const form = document.forms["form1"];
	 const firstName = form["fname"].value.trim();
  const lastName = form["lname"].value.trim();
	 const fullName = `${firstName} ${lastName}`;
  alert(fullName);
}
