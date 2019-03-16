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
let checkbox;
let cost =0;


$('.activities label').on('change', function(){
  cost = 0;
  if ($(this).text().indexOf('$100') >= 0){
    checkbox = $(this).text().match(/\w+\s\d{1,2}\w{2}[-]\d{1,2}\w{2}/).slice(0).toString();

//This if statement checks to see if the checkbox ends unchecked, if so it
//sets the 'disabled' attribute on all matching items to 'false'. It also removes
//the 'disabled' class from the label element.
  if($(this).children().prop('checked')===false){
    $('.activities').children('label').each(function(){
      if ($(this).text().indexOf(checkbox) >= 0){
          $(this).children().prop('disabled', false);
          $(this).removeClass('disabled')
      }
    })
  }
//The else section sets the 'disabled' attribute to 'true' on any matching input
//items other than the one that was selected. It also adds the 'disabled' class
//to the element.
  else{
    $('.activities').children('label').each(function(){
      if ($(this).text().indexOf(checkbox) >= 0 && $(this).children().prop('checked')===false){
          $(this).children().prop('disabled', true);
          $(this).addClass('disabled')
      }
    })
  }
}
  $('.activities').children().each(function(){
      if($(this).children().prop('checked')===true){
        cost += parseInt($(this).text().match(/\d{3}/).slice(0).toString());

      }
  })

$('.activities').children().last().remove();
$('.activities').append('<p>$' + cost +'</p>');




})

//   /\w+\s\d{1,2}\w{2}[-]\d{1,2}\w{2}/   regex
