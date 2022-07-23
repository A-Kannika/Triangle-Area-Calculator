var sideA = document.getElementById('sideA')
rowsideA = document.getElementById('rowsideA'),sideB = document.getElementById('sideB')
rowsideB = document.getElementById('rowsideB'),sideC = document.getElementById('sideC')
rowsideC = document.getElementById('rowsideC'),height = document.getElementById('height')
rowheight = document.getElementById('rowheight'),angle = document.getElementById('angle')
rowangle = document.getElementById('rowangle'),angle2 = document.getElementById('angle2')
rowangle2 = document.getElementById('rowangle2'),angle3 = document.getElementById('angle3')
rowangle3 = document.getElementById('rowangle3'),sideAadd = document.getElementById('sideAadd'),
sideBadd = document.getElementById('sideBadd'),sideCadd = document.getElementById('sideCadd'),
heightadd = document.getElementById('heightadd'),angleadd = document.getElementById('angleadd'),
angle2add = document.getElementById('angle2add'),angle3add = document.getElementById('angle3add');

var calBtn = document.querySelector('.calculate');
var inputSideA = document.querySelector('.sideA');
var inputSideB = document.querySelector('.sideB');
var inputSideC = document.querySelector('.sideC');
var inputHeight = document.querySelector('.height');
var inputAngleAlpha = document.querySelector('.angleAlpha');
var inputAngleBeta = document.querySelector('.angleBeta');
var inputAngleGamma = document.querySelector('.angleGamma');
var resultDisplay = document.querySelector('.result');

function emptyInput() {
	inputSideA.value = "";
	inputSideB.value = "";
	inputSideC.value = "";
	inputHeight.value = "";
	inputAngleAlpha.value = "";
	inputAngleBeta.value = "";
	inputAngleGamma.value = "";
	resultDisplay.innerHTML = "";
}

function addHooks() {	
	triangleRule.addEventListener('change', function() {
		angle3.disabled = false;
		if (triangleRule.value == 'sh') {
			rowsideA.style.display = 'none';
			rowsideB.style.display = 'none';
			rowheight.style.display = 'flex';
			rowsideC.style.display = 'flex';
			rowangle.style.display = 'none';
			rowangle2.style.display = 'none';
			rowangle3.style.display = 'none';
			emptyInput();
		} else if (triangleRule.value == 'sss') {
			rowsideA.style.display = 'flex';
			rowsideB.style.display = 'flex';
			rowheight.style.display = 'none';
			rowsideC.style.display = 'flex';
			rowangle.style.display = 'none';
			rowangle2.style.display = 'none';
			rowangle3.style.display = 'none';
			emptyInput();
		} else if (triangleRule.value == 'sas') {
			rowsideA.style.display = 'none';
			rowsideB.style.display = 'flex';
			rowheight.style.display = 'none';
			rowsideC.style.display = 'flex';
			rowangle.style.display = 'flex';
			rowangle2.style.display = 'none';
			rowangle3.style.display = 'none';
			emptyInput();
		} else if (triangleRule.value == 'asa') {
			rowsideA.style.display = 'none';
			rowsideB.style.display = 'none';
			rowheight.style.display = 'none';
			rowsideC.style.display = 'flex';
			rowangle.style.display = 'flex';
			rowangle2.style.display = 'flex';
			rowangle3.style.display = 'none';
			emptyInput();
		}
	});
}
addHooks();


document.querySelectorAll('label[for=sideA]')[0].innerText = 'Side a';
document.querySelectorAll('label[for=sideB]')[0].innerText = 'Side b';
document.querySelectorAll('label[for=sideC]')[0].innerText = 'Side c';
rowtriangleRule.style.display = 'flex';
if (triangleRule.value == 'sh') {
	rowsideA.style.display = 'none';
	rowsideB.style.display = 'none';
	rowheight.style.display = 'flex';
	rowsideC.style.display = 'flex';
	rowangle.style.display = 'none';
	rowangle2.style.display = 'none';
	rowangle3.style.display = 'none';
} else if (triangleRule.value == 'sss') {
	rowsideA.style.display = 'flex';
	rowsideB.style.display = 'flex';
	rowheight.style.display = 'none';
	rowsideC.style.display = 'flex';
	rowangle.style.display = 'none';
	rowangle2.style.display = 'none';
	rowangle3.style.display = 'none';
} else if (triangleRule.value == 'sas') {
	rowsideA.style.display = 'none';
	rowsideB.style.display = 'flex';
	rowheight.style.display = 'none';
	rowsideC.style.display = 'flex';
	rowangle.style.display = 'flex';
	rowangle2.style.display = 'none';
	rowangle3.style.display = 'none';	
} else if (triangleRule.value == 'asa') {
	rowsideA.style.display = 'none';
	rowsideB.style.display = 'none';
	rowheight.style.display = 'none';
	rowsideC.style.display = 'flex';
	rowangle.style.display = 'flex';
	rowangle2.style.display = 'flex';
	rowangle3.style.display = 'none';
}

calBtn.addEventListener('click', (e) => {
	if (triangleRule.value == 'sh') {
		// If the input field (search bar) is empty, throw an alert
		if(inputHeight.value.length == 0 || inputSideC.value.length == 0) {
			alert("Type your given variable.");
		} else {
			sideCInput = inputSideC.value;
			heightInput = inputHeight.value;

			fetchSH();
			// Remove all text from the input field
			// input.value = "";
		}
		// Prevent the default behavior of the form
		e.preventDefault()
	} else if (triangleRule.value == 'sss') {
		// If the input field (search bar) is empty, throw an alert
		if(inputSideA.value.length == 0 || inputSideB.value.length == 0 || inputSideC.value.length == 0) {
			alert("Type your given variable.");
		} else {
			sideAInput = inputSideA.value;
			sideBInput = inputSideB.value;
			sideCInput = inputSideC.value;

			fetchSSS();
		}
		// Prevent the default behavior of the form
		e.preventDefault()

	} else if (triangleRule.value == 'sas') {
		// If the input field (search bar) is empty, throw an alert
		if(inputSideB.value.length == 0 || inputSideC.value.length == 0 || inputAngleAlpha.value.length == 0) {
			alert("Type your given variable.");
		} else {
			sideBInput = inputSideB.value;
			sideCInput = inputSideC.value;
			angleAlphaInput = inputAngleAlpha.value;

			fetchSAS();
		}
		// Prevent the default behavior of the form
		e.preventDefault()
	} else if (triangleRule.value == 'asa') {
		// If the input field (search bar) is empty, throw an alert
		if(inputSideC.value.length == 0 || inputAngleAlpha.value.length == 0 || inputAngleBeta.value.length == 0 ) {
			alert("Type your given variable.");
		} else {
			sideCInput = inputSideC.value;
			angleAlphaInput = inputAngleAlpha.value;
			angleBetaInput = inputAngleBeta.value;

			fetchASA();
		}
		// Prevent the default behavior of the form
		e.preventDefault()
	}
});

function fetchSH() {
	fetch('/areaSH/'+sideCInput+'/'+heightInput)
	.then(response => response.json())
	.then(data => {
		resultDisplay.innerHTML = 'The area = ' + data['areaSH'];
	});
}
function fetchSSS() {
	fetch('/areaSSS/'+sideAInput+'/'+sideBInput+'/'+sideCInput)
	.then(response => response.json())
	.then(data => {
		resultDisplay.innerHTML = 'The area = ' + data['areaSSS'];
	});
}
function fetchSAS() {
	fetch('/areaSAS/'+sideBInput+'/'+sideCInput+'/'+angleAlphaInput)
	.then(response => response.json())
	.then(data => {
		resultDisplay.innerHTML = 'The area = ' + data['areaSAS'];
	});
}	
function fetchASA() {
	fetch('/areaASA/'+sideCInput+'/'+angleAlphaInput+'/'+angleBetaInput)
	.then(response => response.json())
	.then(data => {
		resultDisplay.innerHTML = 'The area = ' + data['areaASA'];
	});
}
