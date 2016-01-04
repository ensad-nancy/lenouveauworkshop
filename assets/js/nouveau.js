$( document ).ready(function() {
  $('.md').each(function(){
    var that = this;
    jQuery.get($(this).attr('src'), function(data) {
      $(that).replaceWith(marked(data));
    });
  })
});
