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
    'Search for "Wembley Williams"' (browser){
        const navbar = browser.page.navbar();

        navbar
        .SearchForUser("Wembley Williams");

        browser.pause(5000);
    },

    'Go to Profile' (browser){
        const navbar = browser.page.navbar();

        navbar
        .clickProfileLink();

    },

    'Click Logout' (browser){
        const navbar = browser.page.navbar();

        navbar
        .LogOutCurrentUser();

        browser.pause(5000);
    },

    after(browser) {
        browser.end();
      }
}