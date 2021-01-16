/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = 1;
    this.numberComments = 1;
  }

  like() {
    ++this.numberOfLikes};

  comment() {
    ++this.numberComments +1};

  }

var tweet1 = new Tweet("Jermaine", "It's hot outside", "10:00 AM");
var tweet2 = new Tweet("Jermaine", "Time to break out the shorts!", "10:05 AM");
var tweet3 = new Tweet("Jermaine", "I love tacos", "8:05 PM");

tweet1.like();
tweet1.comment();

tweet1.like();
tweet1.comment();tweet1.like();
tweet1.comment();tweet1.like();
tweet1.comment();tweet1.like();
tweet1.comment();tweet1.like();
tweet1.comment();tweet1.like();
tweet1.comment();
console.log(tweet1);
