Feature('Register');
const { I, fakeData, homePage, registerPage } = inject();

let invalidEmail = 'abc!@#';
let firstName = fakeData.getFirstName();
let lastName = fakeData.getLastName();
let validEmail = fakeData.getEmailAddress();
let password = fakeData.getPassword();
let gender = 'Male';
let birthDay = '19';
let birthMonth = 'June';
let birthYear = '1999';
let companyName = 'CodeceptJS';

Scenario('Pre-condition: Access to Register page', async () => {
    I.openUrl('/');
    I.assertTrue(await homePage.isHomepageSliderDisplayed());
    I.clickToLinkByText('Register');
    I.assertEqual(await I.getTitleText(), 'Register');
});

Scenario('Re_01: Register with empty data', async () => {
    I.clickToButtonByText('Register');
    I.assertEqual(await registerPage.getErrorMessageByLabel('FirstName'), 'First name is required.');
    I.assertEqual(await registerPage.getErrorMessageByLabel('LastName'), 'Last name is required.');
    I.assertEqual(await registerPage.getErrorMessageByLabel('Email'), 'Email is required.');
    I.assertEqual(await registerPage.getErrorMessageByLabel('Password'), 'Password is required.');
    I.assertEqual(await registerPage.getErrorMessageByLabel('ConfirmPassword'), 'Password is required.');
});

Scenario('Re_02: Register with invalid email', async () => {
    I.clickToLinkByText('Register');
    I.inputToTextboxByID('Email', invalidEmail);
    I.clickToButtonByText('Register');
    I.assertEqual(await registerPage.getErrorMessageByLabel('Email'), 'Wrong email');
});

Scenario('Re_03: Register with valid info', async () => {
    I.clickToLinkByText('Register');
    I.wait(1);
    I.checkToRadioButtonByLabel(gender);
    I.inputToTextboxByID('FirstName', firstName);
    I.inputToTextboxByID('LastName', lastName);
    I.selectOptionInDropdownByName('DateOfBirthDay', birthDay);
    I.selectOptionInDropdownByName('DateOfBirthMonth', birthMonth);
    I.selectOptionInDropdownByName('DateOfBirthYear', birthYear);
    I.inputToTextboxByID('Email', validEmail);
    I.inputToTextboxByID('Company', companyName);
    I.inputToTextboxByID('Password', password);
    I.inputToTextboxByID('ConfirmPassword', password);
    I.clickToButtonByText('Register');
    I.assertEqual(await registerPage.getSuccessMessage(), 'Your registration completed');
    I.clickToLinkByText('Log out');
});

Scenario('Re_04: Register with existing email', async () => {
    I.clickToLinkByText('Register');
    I.inputToTextboxByID('FirstName', firstName);
    I.inputToTextboxByID('LastName', lastName);
    I.inputToTextboxByID('Email', validEmail);
    I.inputToTextboxByID('Password', password);
    I.inputToTextboxByID('ConfirmPassword', password);
    I.clickToButtonByText('Register');
    I.assertEqual(await registerPage.getExistingEmailErrorMessage(), 'The specified email already exists');
});

Scenario('Re_05: Register with password less than 6 chars', async () => {
    I.clickToLinkByText('Register');
    I.inputToTextboxByID('Password', '1234');
    I.clickToButtonByText('Register');
    I.assertEqual(await registerPage.getErrorMessageByLabel('Password'), 'Password must meet the following rules: must have at least 6 characters');
});

Scenario('Re_06: Register with confirm password unmatched password', async () => {
    I.clickToLinkByText('Register');
    I.inputToTextboxByID('Password', '123456');
    I.inputToTextboxByID('ConfirmPassword', '654321');
    I.clickToButtonByText('Register');
    I.assertEqual(await registerPage.getErrorMessageByLabel('ConfirmPassword'), 'The password and confirmation password do not match.');
});