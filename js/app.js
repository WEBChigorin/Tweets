//Variables

const tweetList = document.getElementById('tweet-list');



//Event listeners
eventListeners()

function eventListeners() {
    //form Submission
    document.querySelector('#form').addEventListener('submit', newTweet);

    //remove tweet from the list
    tweetList.addEventListener('click', removeTweet);
}


//Functions

function newTweet(event) {
    event.preventDefault(); // stops the form's default submion
    
    //read the text area value
    const tweet = document.getElementById('tweet').value;

    //create a remove button
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet'; //I've already have this class in css
    removeBtn.textContent = 'X';

    //create li element with text content
    const li = document.createElement('li'); // now I have li
    li.textContent = tweet;  // and this li gonna get the value of the textarea

    //add this button to each tweet
    li.appendChild(removeBtn);

    //Add to the list
    tweetList.appendChild(li);

    //Add tweets to local storage
    addTweetLocalStorage(tweet);
}

//Removes the tweets from the DOM
function removeTweet(event) {
    if(event.target.classList.contains('remove-tweet')) {
        event.target.parentElement.remove(); // remove <div> which contains <a>
    } else {
        console.log('No');
    }
}

//Add the tweets into local storage
function addTweetLocalStorage(tweet) {
    let tweets = getTweetsFromStorage();

    //Add the tweet into the array
    tweets.push(tweet);

    //convert tweet array into string
    localStorage.setItem('tweets', JSON.stringify( tweets ));
}

//Create and get the array from localstorage
function getTweetsFromStorage() {
    let tweets;
    const tweetsLS = localStorage.getItem('tweets')
    //get the values, if null is returned we create an empty array
    if(tweetsLS === null) {
        tweets = [];
    } else {
        tweets = JSON.parse( tweetsLS );
    }
    return tweets;
}