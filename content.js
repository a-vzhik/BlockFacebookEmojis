function killFuckingEmojis() {
	var emojiBlocks = $('span._3t54[emojisKilled != "true"]');
	emojiBlocks.css("display", "none");
	emojiBlocks.attr("emojisKilled", "true");

	emojiBlocks	
		.parent()
		.find("a span:nth-child(1) span")
		.append(" liked this");

	emojiBlocks	
		.parent()
		.find("a span:nth-child(2) span")
		.append(" liked this");	
}

$(document).ready(function () {
	killFuckingEmojis();
});