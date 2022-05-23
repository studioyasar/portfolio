

function autoType(id, delay, speed)
{
  var ori = document.getElementById(id);
  var s = ori.innerHTML;
  ori.innerHTML = '';

  var i = 0;
  setTimeout(function(){
    var interval = setInterval(function(){
    ori.innerHTML += s.charAt(i);
    i++;
    if(i >= s.length)
      clearInterval(interval);
  }, speed);   
  }, delay);
 
}

var id = 'autotype-me';
autoType(id, 1000, 70);
  


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

