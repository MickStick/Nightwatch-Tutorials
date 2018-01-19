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
    'Click the "Home Page Link"' (browser){
        const navbar = browser.page.navbar();

        navbar
        .clickHomePageLink()
        .assert.title('PHP Tutorial Application | Home');
    },

    after(browser) {
        browser.end();
      }
}