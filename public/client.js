$( document ).ready(function() {
  
  /*global io*/
  let socket = io();

  socket.on("user", function(data) {
  	$("#num-users").text(data.currentUser + " users online");
  	let message = data.name;
  	if (data.connected) {
  		message += " has joined the chat.";
  	} else {
  		message += " has left the chat.";
  	}
  	$("#messages").append($("<li>").html("<b>" + message + "<\/b>"));
  })
   
  // Form submittion with new message in field with id 'm'
  $('form').submit(function(){
    var messageToSend = $('#m').val();
    //send message to server here?
    $('#m').val('');
    return false; // prevent form submit from refreshing page
  });
  
  
  
});
