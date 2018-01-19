const elements = {
     //CSS Selectors because well.... I only feel like use CSS right still and stills
     unameInputField:{selector: '#unameIn'},
     pwordInputField:{selector: '#pwordIn'},
     loginButton:{selector: '#logBtn'},
     appAccept:{selector: '.text-center>a'},
     loginForm:{selector: '.loginForm'}
}

const commands = {
  
  acceptAndEnterApp(){
    return this
    .waitForElementVisible('@appAccept', "Navigation Link List is visible")
    .waitThenClick('@appAccept', 'Appication Terms have been accepted')
  },
  loginAsShaw(){
    return this
    .waitForElementVisible('@unameInputField',"Username Input field is visible")
    .waitThenEnterValue('@unameInputField','mikshaw','Mikhail Shaw\'s username has been entered')
    .waitForElementVisible('@pwordInputField',"Password Input field is visible")
    .waitThenEnterValue('@pwordInputField','pass4040','Mikhail Shaw\'s password has been entered')
    .waitThenClick('@loginButton','Login form submitted');
  }
}

export default {
    elements: elements,
    commands: [commands],
    url: `https://www.phptest-mikshaw.c9users.io`
  }