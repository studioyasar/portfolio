/* hamburger menu starts here*/
$(document).ready(function(){
  var stPopover = $('.hambuger-popover');
  var stPopoverNav = $('.popover-nav-block');
  var stPopoverBtn = $('.popover-btn');

  stPopover.on('click', '.popover-btn', function(){
    stPopoverNav.toggleClass('hide-block');
  });

  $('html').click(function(e) {
    if( !($(e.target).is(stPopover.find('*'))) && !($(e.target).is(stPopover)) ) {
      stPopoverNav.removeClass('hide-block');
    }
  });

});

/* hamburger menu ends here*/