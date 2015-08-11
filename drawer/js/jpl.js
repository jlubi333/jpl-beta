$(document).ready(
	function()
	{
		var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
		var navigationDrawerToggled = false;

		if(isMobile)
		{
			$("#nav-drawer-overlay, #nav-drawer, #nav-drawer-handle").click(
				function()
				{
					toggleNavigationDrawer(navigationDrawerToggled);
					navigationDrawerToggled = !navigationDrawerToggled;
				}
			);
		}
		else
		{
			$("#nav-drawer-overlay, #nav-drawer, #nav-drawer-handle").hover(openNavigationDrawer, closeNavigationDrawer);
		}
	}
);

function toggleNavigationDrawer(navigationDrawerToggled)
{
	if(navigationDrawerToggled)
		closeNavigationDrawer();
	else
		openNavigationDrawer();
}

function openNavigationDrawer()
{
	$("#nav-drawer").addClass("hover");
	$("#nav-drawer-handle div").addClass("hover");
}

function closeNavigationDrawer()
{
	$("#nav-drawer").removeClass("hover");
	$("#nav-drawer-handle div").removeClass("hover");
}