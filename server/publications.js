/*
 * Meteor.publish dictates to the client what data is available to them, for
 * both reasons of security and bandwidth. In the case below, we're publishing
 * the whole Colors collection to the client, which would be a bad idea to do
 * with something that contained other users' private data in it.
 *
 * Read more: http://docs.meteor.com/#/full/meteor_publish
 */

Meteor.publish('colors', function () {
  return Colors.find();
});

// Head over to /server/methods.js
