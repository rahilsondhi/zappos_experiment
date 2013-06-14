//
// Global namespace
//

window.ZL = new Backbone.Marionette.Application()

//
// Models and collections
//

var Friend = Backbone.Model.extend();

var Friends = Backbone.Collection.extend({
  model: Friend,
  comparator: function(friend) {
    friend.get('birthday')
  }
});

var SuggestedGift = Backbone.Model.extend();

var SuggestedGifts = Backbone.Collection.extend({
  initialize: function(options) {
    if (options == null) {
      var options = {};
    }

    // Convert gender to "M" and "F" (Zappos API requirement)
    switch(options.gender) {
      case 'male':
        this.gender = 'M';
        break;
      case 'female':
        this.gender = 'F';
        break;
      default:
        this.gender = null;
        break;
    };

    // Convert location to a two letter state code
    if (_.isObject(options.location)) {
      this.state = convertToStateAbbr(options.location.name);
    } else {
      this.state = null;
    };
  },
  model: SuggestedGift,
  url: function() {
    if (this.gender != null && this.state != null) {
      // Both gender and state are provided
      return 'http://api.zappos.com/Statistics?type=latestStyles&filters={"gender":"'+ this.gender +'"}&location={"state":"'+ this.state +'"}&key=e2d70f1ead64bafbc86dae4064d789f94644b8ff&callback=?'
    } else if (this.gender != null && this.state == null) {
      // Only gender is provided
      return 'http://api.zappos.com/Statistics?type=latestStyles&filters={"gender":"'+ this.gender +'"}&key=e2d70f1ead64bafbc86dae4064d789f94644b8ff&callback=?'
    } else if (this.gender == null && this.state != null) {
      // Only state is provided
      return 'http://api.zappos.com/Statistics?type=latestStyles&location={"state":"'+ this.state +'"}&key=e2d70f1ead64bafbc86dae4064d789f94644b8ff&callback=?'
    } else {
      // No gender or state were provided
      return 'http://api.zappos.com/Statistics?type=latestStyles&key=e2d70f1ead64bafbc86dae4064d789f94644b8ff&callback=?'
    };
  },
  parse: function(response) {
    return response.results
  }
});

//
// Views
//

var FriendView = Backbone.Marionette.ItemView.extend({
  template: '#friend-template',
  className: 'friend media',
  events: {
    'click' : 'showSuggestedGifts'
  },
  showSuggestedGifts: function() {
    suggestedGifts = new SuggestedGifts({gender: this.model.get('gender'), location: this.model.get('location')});
    suggestedGifts.fetch().success(function() {
      // TODO: Need some kind of loading spinner
      suggestedGiftsView = new SuggestedGiftsView({collection: suggestedGifts});
      ZL.suggestedGifts.show(suggestedGiftsView);
    });
  }
});

var FriendsView = Backbone.Marionette.CollectionView.extend({
  itemView: FriendView
});

var SuggestedGiftView = Backbone.Marionette.ItemView.extend({
  template: '#suggested-gift-template',
  className: 'suggested-gift media'
});

var SuggestedGiftsView = Backbone.Marionette.CollectionView.extend({
  itemView: SuggestedGiftView
});

//
// Marionette + Handlebars
// See https://github.com/marionettejs/backbone.marionette/wiki/Using-handlebars-templates-with-marionette
//

Backbone.Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
  return Handlebars.compile(rawTemplate);
};

//
// Login with Facebook button
//

$('.js-login').click(function() {
  console.log('Clicked login button');

  FB.login(function(response) {
    if (response.authResponse) {
     console.log('Welcome!  Fetching your information.... ');
     FB.api('/me?fields=id,name,friends.fields(birthday,name,location,gender)', function(response) {
       console.log('Good to see you, ' + response.name + '.');

       // Massage the friends data
       // * Reject friends without birthdays
       // * TODO: Sort by birthday closest to today
       var friendsWithBirthdays = _.reject(response.friends.data, function(friend) { return friend.birthday == null });
       friendsWithBirthdays = _.sortBy(friendsWithBirthdays, function(friend) { return friend.birthday });

       // Instantiate a new Friends collection
       ZL.friends = new Friends(friendsWithBirthdays);

       // Start the Backbone application
       ZL.start()
     });
    } else {
     console.log('User cancelled login or did not fully authorize.');
    }
  }, {scope: 'friends_birthday,friends_location'});

});

//
// Backbone initializers
//

ZL.addInitializer(function() {
  ZL.addRegions({
    header: '#header',
    friendsList: '#friends-list',
    suggestedGifts: '#suggested-gifts'
  });
});

ZL.addInitializer(function() {
  friendsView = new FriendsView({collection: ZL.friends});
  ZL.friendsList.show(friendsView);
});

ZL.on('initialize:after', function(options) {
  console.log('Backbone app has been initialized');
});

//
// DOMContentLoaded
//

$(function() {
  console.log('DCL');
});
