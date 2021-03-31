
        function Clear() {
            document.getElementById("fname").value = "";
            document.getElementById("midname").value = "";
            document.getElementById("lastname").value = "";
            document.querySelector('input[name="gender"]:checked').checked = false;
        }

        function input() {
            var fname = document.getElementById("fname").value;
            var midmame = document.getElementById("midname").value;
            var lastname = document.getElementById("lastname").value;
            var Gender = document.querySelector('input[name="sex"]:checked').value;

            var feedback = document.getElementById("mytest").value;
            var suggestion = document.getElementById("t5").value;
            var d = new Date();
            if (fname == "") {
                alert("Please! give your first name. ");
            } else if (lastname == "") {
                alert("Please! give your last name. ");
            } else if (suggestion == "") {
                alert("Your feedback is important to us.\nPlease! give your feedback. ");
            } else if (fname.length > 40 || midmame.length > 40 || lastname.length > 40) {
                alert("Limit exceeded! Name should be less than 40 char");
            } else {
                if (midmame.trim() == "")
                    name = Gender + " " + fname.trim() + " " + lastname.trim();
                else {
                    name = Gender + " " + fname.trim() + " " + midmame.trim() + " " + lastname.trim()
                }
                feedback += "\n" + "Name: " + name + "\n" + "Suggestion: " + suggestion + "\n" + d + "\n";
                document.getElementById("mytest").value = feedback;
            }
        }
  