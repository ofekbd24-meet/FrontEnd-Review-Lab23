function changeBackgroundColor(color){
	document.body.style.backgroundColor = color;
}

document.getElementById("change-bg").addEventListener("click", () => {
	changeBackgroundColor(document.getElementById("color").value);
});
