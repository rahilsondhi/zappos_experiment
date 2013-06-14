# Zappos Statistics + Facebook Friends

## What is this?
This is a Backbone.js application that allows you to connect with Facebook and
see a list of your friends with their birthday, location, and gender.
When you click on a friend, I query the Zappos API to find recent purchases
and optionally filter them by gender and location.

For example, if you click on a female friend that lives in New York, I'll
show you recent Zappos purchases of female products from buyers that live in New
York.

Yes, I know it's not very practical or useful. See the next section.

## Why did you make this?
To show Zappos that I can write code :)

## How can this be improved?
* Add a loading spinner when the user clicks on a friend's name
* The friends list should be sorted so that the most recent birthday is first
* Move the `FB.api()` call to a callback function of `FB.Event.subscribe('auth.login')`
* Lazily load Facebook friend and Zappos product images
* `app.js` is pretty large and should be broken up into separate files
* If this app were bigger, the handlebars templates should be in their own `.hbs.jst` files instead of the .html file
* Better UI (I barely spent time on the UI)
