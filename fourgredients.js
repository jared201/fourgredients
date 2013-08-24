if (Meteor.isClient) {

  Meteor.Router.add({
    
    '/': 'home',

    '/about':  'about',  
    
    '/contact': 'contact', 
    '/join': 'join',
    '/help': 'help',
    '/offer': 'offer'
        
  });

  Template.home.greeting = function () {
    return "Welcome to Fourgredients.";
  };

  Template.home.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    },
    'click button.make' : function () {
       Meteor.Router.to('offer');
    }
  });
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
