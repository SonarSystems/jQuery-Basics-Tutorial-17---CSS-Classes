$(document).ready(function()
{
	$("#add").click(function()
	{
		$("div").addClass("new");
	});

	$("#remove").click(function()
	{
		$("div").removeClass("new");
	});

	$("#toggle").click(function()
	{
		$("div").toggleClass("new");
	});
});