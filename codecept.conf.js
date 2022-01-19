exports.config = {
  tests: './src/test/testcases/user/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://demo.nopcommerce.com',
      show: true,
      restart: false,
      waitForNavigation: 'domcontentloaded',
      browser: 'chromium'
    },
    ChaiWrapper: {
      require: 'codeceptjs-chai'
    },
    MyHelper: {
      require: './src/main/utilities/MyHelper_helper.js'
    }
  },
  include: {
    I: './src/main/commons/BasePage.js',
    globalConstants: './src/main/commons/GlobalConstants.js',
    homePage: './src/main/pageObjects/HomePageObject.js',
    loginPage: './src/main/pageObjects/LoginPageObject.js',
    registerPage: './src/main/pageObjects/RegisterPageObject.js',
    basePageUI: './src/main/pageUIs/BasePageUI.js',
    loginPageUI: './src/main/pageUIs/LoginPageUI.js',
    registerPageUI: './src/main/pageUIs/RegisterPageUI.js',
    homePageUI: './src/main/pageUIs/HomePageUI.js',
    fakeData: './src/main/utilities/DataUtil.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs-demo',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    allure: {},
  }
}