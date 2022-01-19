const { I, basePageUI, registerPageUI } = inject();

module.exports = {
    async getErrorMessageByLabel(labelName) {
        I.waitForDynamicElementVisible(registerPageUI.ERROR_MESSAGE_BY_LABEL, labelName);
        return await I.getDynamicElementText(registerPageUI.ERROR_MESSAGE_BY_LABEL, labelName);
    },

    async getSuccessMessage() {
        I.waitForElementVisible(registerPageUI.SUCCESS_MESSAGE);
        return await I.getElementText(registerPageUI.SUCCESS_MESSAGE);
    },

    async getExistingEmailErrorMessage() {
        I.waitForElementVisible(registerPageUI.EXISTING_EMAIL_ERROR_MESSAGE);
        return await I.getElementText(registerPageUI.EXISTING_EMAIL_ERROR_MESSAGE);
    },
}
