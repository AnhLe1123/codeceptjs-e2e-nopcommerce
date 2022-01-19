const { I, basePageUI, homePageUI } = inject();

module.exports = {
    async isHomepageSliderDisplayed() {
        I.waitForElementVisible(homePageUI.HOMEPAGE_SLIDER);
        return await I.isElementDisplayed(homePageUI.HOMEPAGE_SLIDER);
    }
}
