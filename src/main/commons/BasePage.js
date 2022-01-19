const { I, globalConstants, basePageUI } = inject();
module.exports = function() {
  return actor({

    //CodeceptJS wrapper functions

    openUrl: function(pageUrl) {
      this.amOnPage(pageUrl);
    },

    getPageTitle: async function () {
      return await this.grabTitle();
    },

    getPageUrl: async function () {
      return await this.grabCurrentUrl();
    },

    backToPage: function () {
      this.executeScript(() => window.history.back());
    },

    forwardToPage: function () {
      this.executeScript(() => window.history.forward());
    },

    refreshCurrentPage: function () {
      this.refreshPage();
    },

    acceptAlert: function () {
      this.acceptPopup();
    },

    cancelAlert: function() {
      this.cancelPopup();
    },

    getAlertText: async function () {
      return await this.grabPopupText();
    },

    sleepInSecond: function (timeoutInSecond) {
      this.wait(timeoutInSecond);
    },

    getDynamicLocator: function(locator, ...params) {
      String.prototype.format = function() {
        return [...arguments].reduce((p, c) => p.replace(/%s/, c), this);
      };
      return locator.format(...params);
    },

    clickToElement: function (locator) {
      this.click(locator);
    },

    clickToDynamicElement: function (locator, ...params) {
      this.click(this.getDynamicLocator(locator, ...params));
    },

    checkToCheckboxOrRadioButton: function (locator) {
      this.checkOption(locator);
    },

    checkToDynamicCheckboxOrRadioButton: function (locator, ...params) {
      this.checkOption(this.getDynamicLocator(locator, ...params));
    },

    uncheckToCheckboxOrRadioButton: function (locator) {
      this.uncheckOption(locator);
    },

    uncheckToDynamicCheckboxOrRadioButton: function (locator, ...params) {
      this.uncheckOption(this.getDynamicLocator(locator, ...params));
    },
    
    inputToElement: function (locator, value) {
      this.clearField(locator);
      this.fillField(locator, value);
    },

    inputToDynamicElement: function (locator, value, ...params) {
      locator = this.getDynamicLocator(locator, ...params);
      this.clearField(locator);
      this.fillField(locator, value);
    },

    getElementText: async function (locator) {
      return await this.grabTextFrom(locator);
    },

    getDynamicElementText: async function (locator, ...params) {
      return await this.grabTextFrom(this.getDynamicLocator(locator, ...params));
    },

    selectOptionInDropdown: function (locator, optionText) {
      this.selectOption(locator, optionText);
    },

    selectOptionInDynamicDropdown: function (locator, optionText, ...params) {
      this.selectOption(this.getDynamicLocator(locator, ...params), optionText);
    },

    isElementDisplayed: async function (locator) {
      return await tryTo(() => this.seeElement(locator));
    },

    waitForElementVisible: function (locator) {
      this.waitForVisible(locator, globalConstants.LONG_TIMEOUT);
    },

    waitForDynamicElementVisible: function (locator, ...params) {
      this.waitForVisible(this.getDynamicLocator(locator, ...params), globalConstants.LONG_TIMEOUT);
    },

    waitForElementClickable: function (locator) {
      this.waitForClickable(locator, globalConstants.LONG_TIMEOUT);
    },

    waitForDynamicElementClickable: function (locator, ...params) {
      this.waitForClickable(this.getDynamicLocator(locator, ...params), globalConstants.LONG_TIMEOUT);
    },

    //Component pattern

    clickToLinkByText: function (linkText) {
      this.waitForDynamicElementClickable(basePageUI.LINK_BY_TEXT, linkText);
      this.clickToDynamicElement(basePageUI.LINK_BY_TEXT, linkText);
    },

    inputToTextboxByID: function (textboxID, value) {
      this.waitForDynamicElementVisible(basePageUI.TEXTBOX_BY_ID, textboxID);
      this.inputToDynamicElement(basePageUI.TEXTBOX_BY_ID, value, textboxID);
    },

    getTitleText: async function () {
      this.waitForElementVisible(basePageUI.PAGE_TITLE);
      return await this.getElementText(basePageUI.PAGE_TITLE);
    },

    clickToButtonByText: function (btnText) {
      this.waitForDynamicElementClickable(basePageUI.BUTTON_BY_TEXT, btnText);
      this.clickToDynamicElement(basePageUI.BUTTON_BY_TEXT, btnText);
    },

    selectOptionInDropdownByName: function (dropdownName, optionText) {
      this.waitForDynamicElementVisible(basePageUI.DROPDOWN_BY_NAME, dropdownName);
      this.selectOptionInDynamicDropdown(basePageUI.DROPDOWN_BY_NAME, optionText, dropdownName);
    },

    checkToRadioButtonByLabel: function (labelName) {
      this.waitForDynamicElementClickable(basePageUI.RADIO_BUTTON_BY_LABEL, labelName);
      this.checkToDynamicCheckboxOrRadioButton(basePageUI.RADIO_BUTTON_BY_LABEL, labelName);
    }

  });
}
