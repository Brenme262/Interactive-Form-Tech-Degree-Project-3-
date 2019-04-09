function prepPage(){
//Sets focus to the first input when page loads
$('#name').focus();
//Hides the "other" job title field by default
$('#other-title').hide();
//sets initial value of payment options to crecit card
$('#payment').val('credit card')
//Assigns ids to the paypal and bitcoin divs
$('#payment').next().next().prop('id', 'paypal').next().prop('id', 'bitcoin')
//hides the paypal and bitcoin divs
$('#paypal').hide();
$('#bitcoin').hide();
//hide the "select payment option" option
$('#payment :nth-child(1)').hide();
$('.activities legend').prop('id', 'activityError');
}

prepPage();

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

//this pulls the cost of the selected courses and adds it to the varaible cost,
//each time a checkbox is selected. It also sets the value of cost to 0 each time
//it is triggered.
  $('.activities').children().each(function(){
      if($(this).children().prop('checked')===true){
        cost += parseInt($(this).text().match(/\d{3}/).slice(0).toString());

      }
  })

$('#cost').remove();
$('.activities').append('<p id="cost">$' + cost +'</p>');




})

//This function controls what is hidden and displayed in reaction to the Payment
//type the user selects.


$('#payment').on('change', function(){
  if($('#payment').val() == 'credit card'){
    $('#credit-card').show();
    $('#paypal').hide();
    $('#bitcoin').hide();
  }
  else if($('#payment').val() == 'paypal'){
    $('#credit-card').hide();
    $('#paypal').show();
    $('#bitcoin').hide();
  }
  else if($('#payment').val() == 'bitcoin'){
    $('#credit-card').hide();
    $('#paypal').hide();
    $('#bitcoin').show();
  }
})

//   /\w+\s\d{1,2}\w{2}[-]\d{1,2}\w{2}/   regex

// This event listener checks the name field to ensure it is not blank when
//focus moves away from the field. If it is blank it prints a error message to
//the page. each time the focus moves it removes the error message and checks again.
$('#name').on('blur', function(){
  $('#nameValidation').remove();
  $('#name').removeClass('error-border');
if($('#name').val().length <=0){
  $('#name').addClass('error-border')
  $("<p class='error' id='nameValidation'> Name Cannot Be Blank</p>").insertAfter('#name');
};
})

//This event listener validates the email field, if the email is not valid
//it prints out a error message to the page, and applies a red border to the
//email field. each time it runs, it removes the error message and border.

$('#mail').on('blur', function(){
  let email = $('#mail').val();
  //I found this regex test for email on emailregex.com
  const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  $('#emailValidation').remove();
  $('#mail').removeClass('error-border');
  if(!email.match(emailRegEx)){
    $('#mail').addClass('error-border')
    $("<p class='error' id='emailValidation'> Invalid Email Address</p>").insertAfter('#mail');
  }

})

//This event listener validates at least one class has been selected when the
//submit button is clicked. Is does this by checking the value of the cost
//varriable.

$('button').on('click', function(e){
  e.preventDefault();
    $('#activityValidation').remove();
  if(cost <= 0){
    $("<p class='error' id='activityValidation'> You Must Select at Least One Activity</p>").insertAfter('#activityError');
  }
})

$('#cc-num').on('blur', function(){
  $('#ccNumberValidation').remove();
  $('#cc-num').removeClass('error-border')
  if($('#cc-num').val().length< 1){
    $('#cc-num').addClass('error-border')
    $("<p class='error' id='ccNumberValidation'>Please Enter a Credit Card Number </p>").insertAfter('#cc-num');
  }
  else if($('#cc-num').val().length < 13 || $('#cc-num').val().length > 16 ){
    $('#cc-num').addClass('error-border')
    $("<p class='error' id='ccNumberValidation'>Please Enter a Number Between 13 and 16 Digits </p>").insertAfter('#cc-num');
  }
})
