$(document).ready(function() {

    $("button#add-address").click (function () {
        $("#new-addresses").append("<div class='new-address'><label for='new-address'>Address</label>" +
          "<input type='text' class='form-control' id='new-address'></div>")
    });
    $("button#add-phone").click (function () {
        $("#new-phones").append("<div class='new-phone'><label for='new-phone'>Phone number</label>" +
          "<input type='text' class='form-control' id='new-phone'></div>")
    });
    $("button#add-email").click (function () {
        $("#new-emails").append("<div class='new-email'><label for='new-email'>Email address</label>" +
          "<input type='text' class='form-control' id='new-email'></div>")
    });

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = { firstName: inputtedFirstName, lastName: inputtedLastName, addresses: [], phones: [], emails: [] };

    $(".new-address").each( function () {
      var inputtedAddress = $(this).find("input#new-address").val();
      newContact.addresses.push(inputtedAddress);
    });
    $(".new-phone").each( function () {
      var inputtedPhone = $(this).find("input#new-phone").val();
      newContact.phones.push(inputtedPhone);
    });
    $(".new-email").each( function () {
      var inputtedEmail = $(this).find("input#new-email").val();
      newContact.emails.push(inputtedEmail);
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-address").val("");
    $("input#new-phone").val("");
    $("input#new-email").val("");


    $(".contact").last().click(function() {
        $("#show-contact").show();
        $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
        $(".first-name").text(newContact.firstName);
        $(".last-name").text(newContact.lastName);
        newContact.addresses.forEach (function (address) {
          $(".address").append("<li>" + address + "</li>");
        });
        newContact.phones.forEach (function (phone) {
          $(".phone").append("<li>" + phone + "</li>");
        });
        newContact.emails.forEach (function (email) {
          $(".email").append("<li>" + email + "</li>");
        });
    });
  });
});
