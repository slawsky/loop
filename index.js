function hello() {
	var word = ["h","e","l","l","o"];
	
	for (var i=0; i < word.length; i=i+1) {
		alert(word[i]); 
	}
	//alert(word[1]);  
	//alert(word[2]);  
}

function changeImage() {
	var img_List = [
	"https://www.motherjones.com/wp-content/uploads/2018/06/panda-research-6-27-18-2.jpg?w=990",
	"https://cdn-03.independent.ie/world-news/and-finally/article36719908.ece/f5021/AUTOCROP/w620/ipanews_a21eab4f-6494-4234-9292-a57efbd34f40_1", 
	"http://ichef.bbci.co.uk/wwfeatures/wm/live/624_351/images/live/p0/32/tn/p032tngf.jpg"];
	
	var img_curr = document.getElementById("animalImage").src; 
	
	for (var i=0; i < img_List.length; i=i+1) {
		var img = img_List[i];
		if (img_curr == img) {
			if (i==img_List.length-1) {
				document.getElementById("animalImage").src=img_List[0];
			} else{
				document.getElementById("animalImage").src=img_List[i+1];
			}
			
		} 
		 
	}
}
