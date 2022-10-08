$('#num1').keypress(function(e) {
    e.preventDefault();
});

function insert(char) {
	let currentValue = $('#num1').val();
	$('#num1').val(currentValue + char);
}

function clearinput(){$('#num1').val('');}

function result() {
	let currentValue = $('#num1').val();
	let length = currentValue.length;
	let margin = false;
	let char = currentValue[length-1];
	if(char == '+' || char == '-' || char == '*' || char == '/')
	margin = true;
	if(margin)
		$('#num1').val("ERROR!");
	else
		$('#num1').val(eval($('#num1').val()));
}