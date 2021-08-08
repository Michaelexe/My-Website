function socialsClick() {
	document.getElementById('socials-content').style.display = "block";
	document.getElementById('emails-content').style.display = "none";
	document.getElementById('socials-tab-header').style.color = 'rgb(0,200,255)';
	document.getElementById('socials-tab').style.borderBottom = '4px solid rgb(0,200,255)';
	document.getElementById('emails-tab-header').style.color = 'rgb(150,150,150)';
	document.getElementById('emails-tab').style.borderBottom = '4px solid rgb(255,255,255)';

}


function emailsClick() {
	document.getElementById('socials-content').style.display = "none";
	document.getElementById('emails-content').style.display = "block";
	document.getElementById('socials-tab-header').style.color = 'rgb(150,150,150)';
	document.getElementById('socials-tab').style.borderBottom = '4px solid rgb(255,255,255)';
	document.getElementById('emails-tab-header').style.color = 'rgb(0,200,255)';
	document.getElementById('emails-tab').style.borderBottom = '4px solid rgb(0,200,255)';
}