import { expect, Locator, Page } from '@playwright/test';
import { CommonActions } from '../common-actions/commonActions'

//-------------------------------------------------- LINKS PAGE REGISTER AS PRIVATE INDIVIDUAL -------------------------------------------------- //

    // // CONSENT COOKIE
    // const cookie = "//button[@id='eu-cookie-ok']"

    // Select male
    const genderMale = "//input[@id='gender-male']"

    // Select female
    const genderFemale = "//input[@id='gender-female']"

    // Select Name
    const nameField = "//input[@id='FirstName']"

    // Select Surname
    const surnameField = "//input[@id='LastName']"

    // Birth date selection
    const daySelect = "//body/div[5]/div[8]/div[4]/div[1]/form[1]/div[1]/div[3]/div[3]/div[2]/div[4]/select[1]"
    const monthSelect = "//body/div[5]/div[8]/div[4]/div[1]/form[1]/div[1]/div[3]/div[3]/div[2]/div[4]/select[2]"
    const yearSelect = "//body/div[5]/div[8]/div[4]/div[1]/form[1]/div[1]/div[3]/div[3]/div[2]/div[4]/select[3]"


    // Email 
    const emailField = "//input[@id='Email']"

    // Street address
    const streetField = "//input[@id='StreetAddress']"
    const zipCodeField = "//body[1]/div[5]/div[8]/div[4]/div[1]/form[1]/div[1]/div[3]/div[4]/div[2]/div[2]/input[1]"
    const cityField = "//body[1]/div[5]/div[8]/div[4]/div[1]/form[1]/div[1]/div[3]/div[4]/div[2]/div[3]/input[1]"
    const countryField = "//select[@id='CountryId_dropdown']"

    // Phone contact
    const phoneField = "//input[@id='Phone']"
    
    // Newsletter check
    const newsletterSelect = "//input[@id='Newsletter']"

    // Password field
    const passwordField = "//input[@id='Password']"
    const confirmPasswordField = "//input[@id='ConfirmPassword']"

    // Confirm
    const confirmButton = "//input[@id='register-button']"

    // Name - Required field
    const requiredName = "//span[contains(text(),'Ime je potrebno')]"

    // Surname - Required field
    const requiredSurname = "//span[contains(text(),'Ime je potrebno')]"
    
    // Email - Required field
    const requiredEmail = "//span[contains(text(),'Elektronska pošta je potrebna')]"

    // Passwrod - Required field
    const requiredPassword = "//body/div[5]/div[8]/div[4]/div[1]/form[1]/div[1]/div[3]/div[7]/div[2]/div[1]/span[1]"

    // Confirm password - Required field 
    const requiredConfirmPassword = "//body/div[5]/div[8]/div[4]/div[1]/form[1]/div[1]/div[3]/div[7]/div[2]/div[2]/span[1]/span[1]"

//-------------------------------------------------- LINKS PAGE REGISTER AS COMPANY -------------------------------------------------- //

    // Checkmark Register as company
    const checkRegisterAsCompany = "//input[@id='RegisterAsCompany']"
    
    // Company Name
    const companyName = "//input[@id='Company']"

    // Company OIB
    const companyOIB = "//input[@id='CompanyOIB']"

    // Company Email
    const companyEmail = "//input[@id='CompanyEmail']"

    // Company Phone
    const companyPhone = "//input[@id='CompanyTelephone']"

    // Company Contact Person
    const companyContactPerson = "//input[@id='CompanyContactPerson']"

    // Company Address
    const companyAddress = "//input[@id='CompanyAddress']"

    // Company Zip Code
    const companyZipCode = "//body[1]/div[5]/div[8]/div[4]/div[1]/form[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[7]/input[1]"

    // Company Town
    const companyTown = "//body[1]/div[5]/div[8]/div[4]/div[1]/form[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[8]/input[1]"




class HomePage {

    Page: Page
    commonActions: CommonActions

    constructor(page:Page) {
        this.Page = page;
        this.commonActions = new CommonActions();               
    }

    //  /// -----------------  COOKIE ---------------- ///

    // public async clickCookie() {
    //     await this.commonActions.clickElement(this.Page, cookie)
    // }

    // public async checkCookie(): Promise<boolean> {
    //     return this.commonActions.isThisVisible(this.Page, cookie);
    // } 

  
    /// -----------------  SELECT MALE/FEMALE CLICK AND VISIBILITY ---------------- ///

    public async selectMale() {
        await this.commonActions.clickElement(this.Page, genderMale)
    }

    public async checkSelectMaleVisibility(): Promise<boolean> {
        return this.commonActions.isThisVisible(this.Page, genderMale);
    }

    public async selectFemale() {
        await this.commonActions.clickElement(this.Page, genderFemale)
    }

    public async checkSelectFeMaleVisibility(): Promise<boolean> {
        return this.commonActions.isThisVisible(this.Page, genderFemale);
    }

    /// ----------------------------------------------------------------- ///



    /// -----------------  SELECT NAME CLICK AND VISIBILITY ---------------- ///
   
    public async selectName() {
        await this.commonActions.clickElement(this.Page, nameField)
    }
    public async checkFieldNameVisibility(): Promise<boolean> {
        return this.commonActions.isThisVisible(this.Page, nameField);
    }
    public async enterName(writetext) {
        await this.commonActions.enterText(this.Page, nameField, writetext);
    }

    /// ----------------------------------------------------------------- ///



    /// -----------------  SURNAME CLICK AND VISIBILITY ---------------- ///

    public async selectSurname() {
        await this.commonActions.clickElement(this.Page, surnameField)
    }
    public async checkFieldSurnameVisibility(): Promise<boolean> {
        return this.commonActions.isThisVisible(this.Page, surnameField);
    }
    public async enterSurname(writetext) {
        await this.commonActions.enterText(this.Page, surnameField, writetext);
    }

    /// ----------------------------------------------------------------- ///



    /// -----------------  BIRTHDAY CLICK AND VISIBILITY ---------------- ///
    
     public async selectDay() {
        await this.commonActions.clickElement(this.Page, daySelect)
    }
    public async checkSelectDay(): Promise<boolean> {
        return this.commonActions.isThisVisible(this.Page, daySelect);
    }
    public async enterDate(value) {
        await this.commonActions.selectDropdown(this.Page, daySelect, value);
    }


    public async selectMonth() {
        await this.commonActions.clickElement(this.Page, monthSelect)
    }
    public async checkSelectMonth(): Promise<boolean> {
        return this.commonActions.isThisVisible(this.Page, monthSelect);
    }
    public async enterMonth(value) {
        await this.commonActions.selectDropdown(this.Page, monthSelect, value);
    }


    public async selectYear() {
        await this.commonActions.clickElement(this.Page, yearSelect)
    }

    public async checkSelectYear(): Promise<boolean> {
        return this.commonActions.isThisVisible(this.Page, yearSelect);
    }

    public async enterYear(value) {
        await this.commonActions.selectDropdown(this.Page, yearSelect, value);
    }

    /// ----------------------------------------------------------------- ///



    /// -----------------  EMAIL  CLICK AND VISIBILITY ---------------- ///
    
    public async selectEmail() {
        await this.commonActions.clickElement(this.Page, emailField)
    }

    public async checkFieldEmail(): Promise<boolean> {
        return this.commonActions.isThisVisible(this.Page, emailField);
    }

    public async enterEmail(writetext) {
        await this.commonActions.enterText(this.Page, emailField, writetext);
    }


    /// ----------------------------------------------------------------- ///

    
    /// -----------------  ADDRESS  CLICK AND VISIBILITY ---------------- ///
    
    public async selectStreet() {
        await this.commonActions.clickElement(this.Page, streetField)
    }
    public async checkFieldStreet(): Promise<boolean> {
        return this.commonActions.isThisVisible(this.Page, streetField);
    }
    public async enterStreet(writetext) {
        await this.commonActions.enterText(this.Page, streetField, writetext);
    }

    public async selectZipCode() {
        await this.commonActions.clickElement(this.Page, zipCodeField)
    }
    public async enterZipCode(writetext) {
        await this.commonActions.enterText(this.Page, zipCodeField, writetext);
    }
    public async checkFieldZipCode(): Promise<boolean> {
        return this.commonActions.isThisVisible(this.Page, zipCodeField);
    }

    public async selectCity() {
        await this.commonActions.clickElement(this.Page, cityField)
    }
    public async checkFieldCity(): Promise<boolean> {
        return this.commonActions.isThisVisible(this.Page, cityField);
    }

    public async selectCountry() {
        await this.commonActions.clickElement(this.Page, countryField)
    }
    public async checkFieldCountry(): Promise<boolean> {
        return this.commonActions.isThisVisible(this.Page, countryField);
    }
    
    /// ----------------------------------------------------------------- ///



    /// -----------------  PHONE  CLICK AND VISIBILITY ---------------- ///

    public async selectPhone() {
        await this.commonActions.clickElement(this.Page, phoneField)
    }
    public async checkFieldPhone(): Promise<boolean> {
        return this.commonActions.isThisVisible(this.Page, phoneField);
    }
    public async enterPhone(writetext) {
        await this.commonActions.enterText(this.Page, phoneField, writetext);
    }

    /// ----------------------------------------------------------------- ///



    /// -----------------  NEWSLETTER   CLICK AND VISIBILITY ---------------- ///
    
    public async selectNewsletter() {
        await this.commonActions.clickElement(this.Page, newsletterSelect)
    }
    public async checkSelectNewsletter(): Promise<boolean> {
        return this.commonActions.isThisVisible(this.Page, newsletterSelect);
    }

    /// ----------------------------------------------------------------- ///

    

     /// -----------------  PASSWORD   CLICK AND VISIBILITY ---------------- ///

    public async selectPassword() {
        await this.commonActions.clickElement(this.Page, passwordField)
    }
    public async checkFieldPassword(): Promise<boolean> {
        return this.commonActions.isThisVisible(this.Page, passwordField);
    }
    public async enterPassword(writetext) {
        await this.commonActions.enterText(this.Page, passwordField, writetext);
    }

    public async selectConfirmPassword() {
        await this.commonActions.clickElement(this.Page, confirmPasswordField)
    }
    public async checkFieldConfirmPassword(): Promise<boolean> {
        return this.commonActions.isThisVisible(this.Page, confirmPasswordField);
    }
    public async confirmPassword(writetext) {
        await this.commonActions.enterText(this.Page, confirmPasswordField, writetext);
    }

    /// ----------------------------------------------------------------- ///



    /// -----------------  CONFIRM   CLICK AND VISIBILITY ---------------- ///

    public async pressConfirmButton() {
        await this.commonActions.clickElement(this.Page, confirmButton)
    }
    public async checkConfirmButton(): Promise<boolean> {
        return this.commonActions.isThisVisible(this.Page, confirmButton);
    }


    /// ----------------------------------------------------------------- ///



    /// -----------------  REQUIRED FIELDS VISIBILITY ---------------- ///

    public async checkRequiredName(): Promise<boolean> {
        return this.commonActions.isThisVisible(this.Page, requiredName);
    }
    public async checkRequiredSurname(): Promise<boolean> {
        return this.commonActions.isThisVisible(this.Page, requiredSurname);
    }
    public async checkRequiredEmail(): Promise<boolean> {
        return this.commonActions.isThisVisible(this.Page, requiredEmail);
    }
    public async checkRequiredPassword(): Promise<boolean> {
        return this.commonActions.isThisVisible(this.Page, requiredPassword);
    }
    public async checkRequiredConfirmPassword(): Promise<boolean> {
        return this.commonActions.isThisVisible(this.Page, requiredConfirmPassword);
    }

    /// ----------------------------------------------------------------- ///



    /// -----------------  REGISTER AS COMPANY  ---------------- ///


    /// -----------------  SELECT FIELD FOR COMPANY REGISTRATION ---------------- ///
   
    public async selectCompany() {
        await this.commonActions.checked(this.Page, checkRegisterAsCompany)
    }

    public async checkSelectCompany(): Promise<boolean> {
        return this.commonActions.isThisVisible(this.Page, checkRegisterAsCompany);
    }
    
    /// -----------------  CHECK AND ENTER COMPANY NAME  ---------------- ///
   
    public async clickCompanyName() {
        await this.commonActions.clickElement(this.Page, companyName)
    }
    public async checkCompanyName(): Promise<boolean> {
        await this.commonActions.scrollToElement(this.Page, companyName)
        return this.commonActions.isThisVisible(this.Page, companyName);
    }
    public async enterCompanyName(writetext) {
        await this.commonActions.enterText(this.Page, companyName, writetext);
    }

    /// ----------------------------------------------------------------- ///



    /// -----------------  CHECK AND ENTER COMPANY OIB  ---------------- ///
   
     public async clickCompanyOIB() {
        await this.commonActions.clickElement(this.Page, companyOIB)
    }
    public async checkCompanyOIB(): Promise<boolean> {
        return this.commonActions.isThisVisible(this.Page, companyOIB);
    }
    public async enterCompanyOIB(writetext) {
        await this.commonActions.enterText(this.Page, companyOIB, writetext);
    }

    /// ----------------------------------------------------------------- ///



    /// -----------------  CHECK AND ENTER COMPANY EMAIL  ---------------- ///
   
    public async clickCompanyEmail() {
        await this.commonActions.clickElement(this.Page, companyEmail)
    }
    public async checkCompanyEmail(): Promise<boolean> {
        return this.commonActions.isThisVisible(this.Page, companyEmail);
    }
    public async enterCompanyEmail(writetext) {
        await this.commonActions.enterText(this.Page, companyEmail, writetext);
    }

    /// ----------------------------------------------------------------- ///



    /// -----------------  CHECK AND ENTER COMPANY PHONE  ---------------- ///
   
    public async clickCompanyPhone() {
        await this.commonActions.clickElement(this.Page, companyPhone)
    }
    public async checkCompanyPhone(): Promise<boolean> {
        return this.commonActions.isThisVisible(this.Page, companyPhone);
    }
    public async enterCompanyPhone(writetext) {
        await this.commonActions.enterText(this.Page, companyPhone, writetext);
    }

    /// ----------------------------------------------------------------- ///
    


    /// -----------------  CHECK AND ENTER COMPANY CONTACT PERSON  ---------------- ///
   
    public async clickCompanyContactPerson() {
        await this.commonActions.clickElement(this.Page, companyContactPerson)
    }
    public async checkCompanyContactPerson(): Promise<boolean> {
        return this.commonActions.isThisVisible(this.Page, companyContactPerson);
    }
    public async enterCompanyContactPerson(writetext) {
        await this.commonActions.enterText(this.Page, companyContactPerson, writetext);
    }

    /// ----------------------------------------------------------------- ///



    /// -----------------  CHECK AND ENTER COMPANY CONTACT ADDRESS  ---------------- ///
   
    public async clickCompanyAddress() {
        await this.commonActions.clickElement(this.Page, companyAddress)
    }
    public async checkCompanyAddress(): Promise<boolean> {
        return this.commonActions.isThisVisible(this.Page, companyAddress);
    }
    public async enterCompanyAddress(writetext) {
        await this.commonActions.enterText(this.Page, companyAddress, writetext);
    }

    /// ----------------------------------------------------------------- ///



    /// -----------------  CHECK AND ENTER COMPANY ZIP CODE  ---------------- ///
   
    public async clickCompanyZipCode() {
        await this.commonActions.clickElement(this.Page, companyZipCode)
    }
    public async checkCompanyZipCode(): Promise<boolean> {
        return this.commonActions.isThisVisible(this.Page, companyZipCode);
    }
    public async enterCompanyZipCode(writetext) {
        await this.commonActions.enterText(this.Page, companyZipCode, writetext);
    }

    /// ----------------------------------------------------------------- ///

}

export {HomePage}