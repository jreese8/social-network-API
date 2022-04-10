# social-network-API

## Description
  An application that can be used to add, update, and delete users. Thoughts, reactions, and friends features are not yet implemented.

 ## Table of Contents

  - [Installation](#installation)
  - [Walkthrough](#Walkthrough)
  - [Usage](#usage)
  

  ## Installation
  Use git clone in git bash after copying the link at https://github.com/jreese8/social-network-API.


  ## Walkthrough
  https://drive.google.com/file/d/1yz4puZ24VEVlcGlY2GWGHBZiEOnyf4Bf/view

  
  ## Usage
  Type "npm start" in your terminal and open up Insomnia. To add a user, type { "userName": "your username", "email": "your email} in the JSON body and send the following request: http://localhost:3001/api/users. Use the same request http://localhost:3001/api/users to find all users. Use the _id value after users in the request to find that specific user. Do this once more in the DELETE route to delete a user. Perform the previous step to update the specific user while also adding new information by typing { "userName": "your username", "email": "your email} once again.