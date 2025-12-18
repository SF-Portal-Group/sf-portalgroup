/*
    TODO: currently cannot handle tabs with more than 1 level of nesting because I haven't yet had a site to test on
*/

$("#header-wrapper").after(`<header><nav><ul class="nav">`);
$("#header_logo img").prependTo("header nav");

// For each tab in the original tab container:
$(`#tab_responsive_tabs [id^="tab_"]`).each(function() {
    // If the tab has no sub-items, add it to the nav as a link.
    if ( $(this).find("dfn").length === 1 ) {
        $(".nav").append(`<li>${ $(this).find("dfn").first().html() }</li>`);
    }

    // If it does have sub-items, add it to the nav as a hoverable container.
    else {
        let menu = $(`
            <li class="nav__tab-menu">
                <a>
                    <span>${ $(this).find("dfn").first().text() }</span>
                    <i class="fa fa-sort-desc"></i>
                </a>
            </li>
        `);

        let sub = $(`<ul class="nav__tab-sub">`);

        // For each child tab:
        $(this).children().find('dfn').each(function() {
            // If it does not have any children, add it to the parent menu as a link.
            if ( $(this).is(":last-child") ) {
                sub.append(`<li>${ $(this).html() }</li>`);
            }
        });

        menu.append(sub);
        $(".nav").append(menu);
    }
});

// Add the basket link from the original header.
$(".nav").append(`<li><a href="basket_view.cgi"><i class="fa fa-shopping-basket"></i><span>${ $(".cart_num_items").text() }</span></a></li>`);

// Create a new submenu with the profile and logout links.
$(".nav").append(`
    <li class="nav__tab-menu">
        <a>
            <span>${ $("#logout_userid").text() }</span>
            <i class="fa fa-sort-desc"></i>
        </a>
        <ul class="nav__tab-sub">
            <li><a href="profile.cgi?force_view=1">My Profile</a></li>
            <li><a id="submit_logout" href="logout.cgi">Logout</a></li>
        </ul>
    </li>
`);

// If user is not viewing the catalog page, insert a link to the catalog.
if ( !$(".select-items").length ) {
    $(".nav").prepend(`<li><a href="catalog.cgi">Back to Catalog</a></li>`);
}