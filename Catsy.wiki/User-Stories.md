# User Stories

## Users

### Sign Up

* As an unregistered and unauthorized user, I want to be able to sign up for the website via a sign-up form.
  * When I'm on the `/signup` page:
    * I would like to be able to enter my email, username, and preferred password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the sign-up form.
      * So that I can seamlessly access the site's functionality
  * When I enter invalid data on the sign-up form:
    * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
    * So that I can try again without needing to refill forms I entered valid data into.

### Log in

* As a registered and unauthorized user, I want to be able to log in to the website via a log-in form.
  * When I'm on the `/login` page:
    * I would like to be able to enter my email and password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the log-in form.
      * So that I can seamlessly access the site's functionality
  * When I enter invalid data on the log-in form:
    * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
      * So that I can try again without needing to refill forms I entered valid data into.

### Demo User

* As an unregistered and unauthorized user, I would like an easy to find and clear button on both the `/signup` and `/login` pages to allow me to visit the site as a guest without signing up or logging in.
  * When I'm on either the `/signup` or `/login` pages:
    * I can click on a Demo User button to log me in and allow me access as a normal user.
      * So that I can test the site's features and functionality without needing to stop and enter credentials.

### Log Out

* As a logged in user, I want to log out via an easy to find log out button on the navigation bar.
  * While on any page of the site:
    * I can log out of my account and be redirected to the Homepage.
      * So that I can easily log out to keep my information secure.

## Catsy

### Cat Adoption

* As a logged out user, I want to be able to browse the different cats up for adoption.
  * When I'm on the Homepage:
    * I can see a list of clickable thumbnails of different categories
      * So that I can explore different categories of cats up for adoption.

* As a logged in or logged out user, I want to be able to view details about cats that are up for adoption.
  * When I'm on the Homepage:
    * I can see thumbnails of cats up for adoption that I can select
      * So I can see a cat and details about that cat.
  * When I'm on an individual cat's adoption page:
    * I can see an indicator for if the cat is not up for adoption and an adopt button
      * So that I can add it to cart/box if it is available for adoption
      * So that I can see it's not available for adoption because the button is disabled.


### Shopping Cart

* As a logged out user, I want to be prompted to sign in or sign up if I try to adopt a cat.
  * While on any cat's adoption page:
    * When I click the "Adopt" button, I am taken to the sign in/ sign up page
      * So that I can create or access my account
      * So that I can add cats for adoption

* As a logged in user, I want to be able to see the cats in my cardboard box (shopping cart) that I wish to adopt, and be able to adopt them.
  * While on any cat's adoption page:
    * I can click an "Adopt" button if the cat is available for adoption
      * So that I can add it to my cart/box to prepare to adopt it.
  * When I'm viewing my cart/box:
    * I can see the cat's name and breed listed and its portrait
      * So that I know basic details about the cat I'm adopting
    * I can click on an individual cat in my cart/box to be taken to that cat's adoption page
      * So that I can view the details about that cat
    * I can click a button to remove specific cats that I no longer wish to adopt from my cart/box
      * So that I can change my mind about adopting a particular cat.
    * I can press a button to empty the entire cart/box
      * So that I can start over.
    * I can press a button to adopt the cats I have in my cart/box
      * So that I can adopt those cats.


### Discussion Board

* As a logged in or logged out user I can view "Scratches" associated with individual cats posted by myself or anyone else.
  * When I'm on the individual cat page:
    * I can view previously written 'Scratches' (comments) posted by myself or other users.
      * So that I can see what users have posted.

* As a logged in user, I want to be able to create 'Scratches' (comments) about the cat by clicking a 'Scratch Post' button on the cat's page located below an empty text-field box.
  * When I'm on the individual cat page:
    * I can enter a comment in a text-field box and click a "Scratch Post" button to post my comment.
      * So that I can make a comment about a particular cat.

* As a logged in user, I want to be able to edit my 'Scratches' (comments) about the cat by clicking an 'Edit' button associated with an individual Scratch that I made.
  * When I'm on the individual cat page:
    * I can click "Edit" to make changes to Scratches I have previously posted.
      * So that I can fix any errors I make in my Scratch.

* As a logged in user, I want to be able to delete my 'Scratches' (comments) about the cat by clicking a 'Delete' button associated with the Scratch that I made.
  * When I'm on the individual cat page:
    * I can click "Delete" to make changes to Scratches I have previously posted.
      * So that I can remove a Scratch I no longer want displayed.

### Search

* As a logged in or logged out user, I want to be able to search for an individual cat or by category(breed, age, size, gender).
  * When I'm on any page: 
    * When I click on the search bar and start typing a string to search I am presented with a list of possible matches.
      * So that I can narrow down my what I'm searching for.
    * When I decide what I want to search for, I can click on an option from the list, hit enter, or click the search button.
      * So that I can see a new page populated with the results based on the search.
    * When I enter nothing in the search bar, I am presented with a list of random cats, recent adoptions, or redirect to main page.
      * So that I can begin exploring cats up for adoption.
    * When I enter a string with no matches, I am presented with a new page that has a message informing of a failed search and to try a new search.
      * So that I know what to do next.

### Profile Page **BONUS**

* As a logged in, I want to be able to click on my profile icon and be sent to my profile page.
  * When I'm on my profile page:
    * I can view all cats that I've adopted.
