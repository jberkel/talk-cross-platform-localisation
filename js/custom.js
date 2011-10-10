/* custom behavior */

$('pre > code').each(function(i, e) {
  $(e).parent().addClass('prettyprint');
  $(e).addClass('prettyprint');
});
