export default {

    before(browser) {
        browser.maximizeWindow();
      },
    'Login as Mikhail Shaw' (browser){
        const login = browser.page.login();

        login
        .navigate()
        .acceptAndEnterApp()
        .loginAsShaw();
    },
    'Submit Test Post' (browser){
        const newPost = browser.page.newPost();

        newPost
        //.navigate()
        .makeAQuickPost()
    },
    'Click the "Home Page Link"' (browser){
        const navbar = browser.page.navbar();

        navbar
        //.navigate()
        .clickHomePageLink()
        .assert.title('PHP Tutorial Application | Home');
    },
    'Go to Profile' (browser){
        const navbar = browser.page.navbar();

        navbar
        .clickProfileLink();

    },

    'Click Settings' (browser){
        const navbar = browser.page.navbar();

        navbar
        .LogOutCurrentUser();

        browser.pause(10000);
    },

    after(browser) {
        browser.end();
      }
}