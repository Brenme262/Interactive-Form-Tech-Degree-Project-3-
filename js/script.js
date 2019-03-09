//Sets focus to the first input when page loads
$('#name').focus();

//Hides the "other" job title field by default
$('#other-title').hide();

//Toggles the "other" job title field when 'other' is selected
$('#title').on('click', function(){
  if ($('#title').val() === 'other'){
    $('#other-title').toggle();
  }
})


// This event listener triggers on the 'design' input, it filters the options
//available on the 'color' input field. It also sets the default value to the
//first available option of the correct theme.
$('#design').on('click', function(){

if ($('#design').val() === 'js puns'){
  $('#color').val('cornflowerblue');
  $('#color').children().each(function(){
    if ($(this).text().indexOf('Puns') >= 0 ){
      $(this).show();
  } else{
    $(this).hide();
  }
}
);
}

else if ($('#design').val() === 'heart js'){
  $('#color').val('tomato');
  $('#color').children().each(function(){
    if ($(this).text().indexOf('I') >= 0 ){
      $(this).show();
  } else{
    $(this).hide();
  }
}
);
}
else {
  $('#color').val('cornflowerblue');
  $('#color').children().each(function(){
    $(this).show();
  })
}
})

///$('#color').children().each(function(){console.log($(this).text())});
