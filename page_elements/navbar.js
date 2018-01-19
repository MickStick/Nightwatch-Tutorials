const elements = {

    //CSS Selectors because well.... I only feel like use CSS right still and stills
    
    //Links
    homeLink: {selector: '#home-link>a'},
    settingsLink: {selector: '#set-link>a'},
    logoutLink: {selector: '#logout'},
    searchBar: {selector: '#hsearch'},
    searchBtn: {selector: '#hsearchForm>button'},
    brandLogo: {selector: 'header>h1>a'},
    profileLink: {selector: 'header>#name'},
    //Not Links
    header: {selector: 'header'},
    navList: {selector: '#nav-list'},
    settingsDrop: {selector: '#settings-list'}
}

const commands = {
    clickHomePageLink (){
        return this
        /*.waitForElementPresent('@navList', "Navigation Link List is visible", 10000)
        .moveToElement('@navList', 10, 10, () => {
            this.waitThenClick('@homeLink', 'Home Page Link has been clicked');
        });*/
        .waitThenClick('@brandLogo','Brand Logo to home has been clicked');
    },

    clickProfileLink(){
        return this
        .waitForElementVisible('@profileLink','Profile Link is visible')
        .waitThenClick('@profileLink','Profile Link has been clicked');
    },

    LogOutCurrentUser() {
        return this
        .moveToElement('@header',10,10,() => {
            this
            .waitThenClick('@settingsLink','Settings Link has been clicked')
            .waitThenClick('@logoutLink','User has beeen logged out');
        });
        
    }
}

export default {
    elements: elements,
    commands: [commands],
    url: `https://www.phptest-mikshaw.c9users.io/profile.php`
  }