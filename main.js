let images = [
	"https://thumbs.gfycat.com/UnripeEntireCur-size_restricted.gif",
	"https://i.gifer.com/1mHv.gif",
	"https://1.bp.blogspot.com/-vPK7Ok5Unlg/VJ3wAtoCFFI/AAAAAAAAIBw/OVxZ8doR2rc/s1600/sirius-death.gif"
];

const getRandomImage = () => {
	var item = images[Math.floor(Math.random() * images.length)];
	return item;
}

const changeImages = () => {
	let images = document.querySelectorAll("img");
	images.forEach(image => {
		image.srcset = "";
		image.style.width = image.width + "px";
		image.style.height = image.height + "px";
		image.src = getRandomImage();
	})
}

setTimeout(() => {
	changeImages()
}, 300)