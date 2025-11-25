$(document).ready(function() {
    // Creates the header containers.
    $("#header-wrapper").after('<div class="tabs-header"><nav><ul class="tabs-nav" id="tabsNav">');
    $("#header-wrapper").after('<div id="logoHeader">');

    // Iterates over the top-level tabs in the original tab container.
    $('#tab_responsive_tabs [id^="tab_"]').each(function() {
        let tabID = $(this).attr("id");

        // If the tab has no sub-items, add it to the nav as a link.
        if ( $(this).find("dfn").length == 1 ) {
            $("#tabsNav").append(`<li>${ $(this).find("dfn").first().html() }</li>`);
        }

        // If it does have sub-items, add it to the nav as a hoverable container.
        else {
            $("#tabsNav").append(`
                <li class="tab-topmenu">
                    <a>
                        <span>${ $(this).find("dfn").first().text() }</span>
                        <i class="fa fa-sort-desc"></i>
                    </a>
                    <ul class="tab-submenu" id="nav-${tabID}"></ul>
                </li>
            `);
        }

        // Iterates over the sub-items of the tab.
        $(this).children().find('dfn').each(function () {

            // If the sub-item has no children, add it to the container as a link.
            if ( $(this).is(":last-child") ) {
                $(`#nav-${tabID}`).append(`<li>${ $(this).html() }</li>`);
            }

        });
    });

    // Adds the basket link from the original header.
    $("#tabsNav").append(`<li><a href="basket_view.cgi"><i class="fa fa-shopping-basket"></i>${ $(".cart_num_items").text() }</a></li>`);

    // Creates a new submenu with the profile and logout links.
    $("#tabsNav").append(`
        <li class="tab-topmenu">
            <a>
                <span>${ $("#logout_userid").text() }</span>
                <i class="fa fa-sort-desc"></i>
            </a>
            <ul class="tab-submenu">
                <li><a href="profile.cgi?force_view=1">My Profile</a></li>
                <li><a id="submit_logout" href="logout.cgi">Logout</a></li>
            </ul>
        </li>
    `);

    // Moves the logo out of the table nested in the header.
    $("#header_logo .no_mobile").appendTo("#logoHeader");

    // If user is not viewing the catalog page, insert a link to the catalog.
    if (!$(".select-items").length) {
        $("#tabsNav").prepend('<li><a href="catalog.cgi">Back to Catalog</a></li>');
    }
});