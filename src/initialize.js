$(document).ready(function() {
    // Adds a link to the favicon.
    $("head").append(`<link rel="icon" href="con/favicon.png" />`);

    // Removes the media query from the header CSS link so it can apply to all screen sizes.
    $("link[href^='css/header.css']").removeAttr("media");

    // Changes the alignment of the Shipping page table cells.
    $("#shipping-pricetable th:not(:first-child)").removeClass("left").addClass("center");
    $("#shipping-pricetable td:not(:first-child)").removeClass("left").addClass("center");
});