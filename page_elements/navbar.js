const elements = {

    //CSS Selectors because well.... I only feel like use CSS right still and stills
    
    //Links
    homeLink: {selector: '#home-link>a'},
    settingsLink: {selector: '#set-link>a'},
    logoutLink: {selector: '#logout'},
    searchBar: {selector: '#hsearch'},
    searchBtn: {selector: '#hsearchForm>button'},
    //Not Links
    navList: {selector: '#nav-list'},
    settingsDrop: {selector: '#settings-list'}
}

const commands = {
    clickHomePageLink (){
        return this
        .waitForElementVisible('@navList', "Navigation Link List is visible")
        .moveToElement('@navList', 10, 10, () => {
            this.waitThenClick('@homeLink', 'Home Page Link has been clicked');
        });
    }
}

export default {
    elements: elements,
    commands: [commands],
    url: `https://www.phptest-mikshaw.c9users.io`
  }