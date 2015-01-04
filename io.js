var socketio = require('socket.io')();
var passportSocketIo = require('passport.socketio');
var session = require('express-session');
var redisStore = require('connect-redis')(session);
var cookieParser = require('cookie-parser');

socketio.use(passportSocketIo.authorize({
  cookieParser: cookieParser,
  key:         'cebutindahan',
  secret:      'letsgocebu2015',
  store:       new redisStore(),
  success:     onAuthorizeSuccess,
  fail:        onAuthorizeFail,
}));

function onAuthorizeSuccess(data, accept){
  console.log('Authorization granted!');
  accept();
}

function onAuthorizeFail(data, message, error, accept){

  if(error)
    console.log('Not Authorized!');
    accept(new Error(message));
  // this error will be sent to the user as a special error-package
  // see: http://socket.io/docs/client-api/#socket > error-object
}

function setUserinfo(user){
  filteredUser = {};
  switch(user.primary){
    case 'facebook':
      filteredUser = user.facebook;
      break;
    case 'twitter':
      filteredUser = user.twitter;
      break;
    case 'google':
      filteredUser = user.google;
      break;
    default:
      filteredUser = {};
      break;
  }
  return filteredUser;
}
socketio.on('connection', function(socket){
  console.log('socket connected!');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('chat message', function(msg){
    socketio.emit('chat message', msg, setUserinfo(socket.request.user));
  });

  socket.on('subscribe', function(data) {
    console.log('someone joined the room!', data);
    socket.join(data.room);
  });

  socket.on('unsubscribe', function(data) { socket.leave(data.room); });

});

// setInterval(function(){
//     console.log('room changed!');
//     socketio.sockets.in('global').emit('roomChanged', { chicken: 'tasty' });
// }, 1000);

module.exports = socketio;