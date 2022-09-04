import { test, expect, Page } from '@playwright/test';
import { HomePage } from '../Pages/HomePage';




    /// ---------------------------------------------- LINKS PAGE REGISTRATION COMPANY POSITIVE ---------------------------------------------- /// 

test(`Test Links Registration page as company - Positive test case`, async ({ page }) => {
    const home = new HomePage(page);
    await test.step('Go to Links Registration page', async () => {
        await page.goto('');
        await page.waitForLoadState('networkidle');
    });

   

    // --- SELECT COMPANY REGISTRATION --- //
    
    await test.step('Verify the Register as comnpany field is visible and clickable', async () => {
        await expect(await home.checkSelectCompany()).toBeTruthy();
    });
    await test.step('Select - Register as company', async () => {
        await home.selectCompany();})


    // --- COMPANY NAME --- //

    await test.step('Verify the Company name field is visibale and clickable', async () => {
        await expect(await home.checkCompanyName()).toBeTruthy();
    });
    await test.step('Enter Company name', async () => {
        await home.enterCompanyName('Mihajlo Company');})


    // --- COMPANY OIB --- //

    await test.step('Verify the Company OIB field is visibale and clickable', async () => {
        await expect(await home.checkCompanyOIB()).toBeTruthy();
    });
    await test.step('Enter Company name', async () => {
        await home.enterCompanyOIB('34562345678');})


    // --- COMPANY EMAIL --- //

    await test.step('Verify the Company Email field is visibale and clickable', async () => {
        await expect(await home.checkCompanyEmail()).toBeTruthy();
    });
    await test.step('Enter Company name', async () => {
        await home.enterCompanyEmail('mihajlo.stojanovski+2@gmail.com');})


    // --- COMPANY PHONE --- //

    await test.step('Verify the Company Phone field is visibale and clickable', async () => {
        await expect(await home.checkCompanyPhone()).toBeTruthy();
    });
    await test.step('Enter Company phone', async () => {
        await home.enterCompanyPhone('+38970777778');})
        

    // --- COMPANY CONTACT PERSON --- //

    await test.step('Verify the Company Contact Person field is visibale and clickable', async () => {
        await expect(await home.checkCompanyContactPerson()).toBeTruthy();
    });
    await test.step('Enter Company Contact person', async () => {
        await home.enterCompanyContactPerson('Testing Stojanovski');})


    // --- COMPANY ADDRESS --- //

    await test.step('Verify the Company Address field is visibale and clickable', async () => {
        await expect(await home.checkCompanyAddress()).toBeTruthy();
    });
    await test.step('Enter Company Address', async () => {
        await home.enterCompanyAddress('Testing Street 123');})   
        
        
    // --- COMPANY ZIPCODE --- //

    await test.step('Verify the Company Zip field is visibale and clickable', async () => {
        await expect(await home.checkCompanyZipCode()).toBeTruthy();
    });
    await test.step('Enter Company ZipCode', async () => {
        await home.enterCompanyZipCode('2000');})  
       

    // --- GENDER --- //
    await test.step('Verify the Male Gender selection is visibale and clickable', async () => {
        await expect(await home.checkSelectMaleVisibility()).toBeTruthy();
    });

    await test.step('Select the Male Gender selection is visibale and clickable', async () => {
        await home.selectMale();
    });

    await test.step('Verify the Female Gender selection is visibale and clickable', async () => {
        await expect(await home.checkSelectFeMaleVisibility()).toBeTruthy();
    });


     // --- NAME AND SURNAME --- //
    await test.step('Verify the Name field is visibale and clickable', async () => {
        await expect(await home.checkFieldNameVisibility()).toBeTruthy();
    });
    await test.step('Enter Name field is visibale and clickable', async () => {
        await home.enterName('Mihajlo');})

    await test.step('Verify the Surname field is visibale and clickable', async () => {
        await expect(await home.checkFieldSurnameVisibility()).toBeTruthy();
    });
    await test.step('Enter Name field is visibale and clickable', async () => {
        await home.enterSurname('Stojanovski');})


     // --- BIRTHDAY --- //

    await test.step('Verify the Day option is visibale and clickable', async () => {
        await expect(await home.checkSelectDay()).toBeTruthy();
    });
    await test.step('Enter day of Birth', async () => {
        await home.enterDate('31')
    ;})

    await test.step('Verify the Month option is visibale and clickable', async () => {
        await expect(await home.checkSelectMonth()).toBeTruthy();
    });
    await test.step('Enter month of Birth', async () => {
        await home.enterMonth('10')
    ;})

    await test.step('Verify the Year option is visibale and clickable', async () => {
        await expect(await home.checkSelectYear()).toBeTruthy();
    });
    await test.step('Enter year of Birth', async () => {
        await home.enterYear('1985')
    ;})

    await test.step('Verify the Email field is visibale and clickable', async () => {
        await expect(await home.checkFieldEmail()).toBeTruthy();
    });
    await test.step('Enter Email', async () => {
        await home.enterEmail('mihajlo.stojanovski+1@gmail.com')
    ;})

    await test.step('Verify the Street field is visibale and clickable', async () => {
        await expect(await home.checkFieldStreet()).toBeTruthy();
    });
    await test.step('Enter Street', async () => {
        await home.enterStreet('Testing Street')
    ;})
    
    await test.step('Verify the Zipcode field is visibale and clickable', async () => {
        await expect(await home.checkFieldZipCode()).toBeTruthy();
    });
    await test.step('Enter ZipCode', async () => {
        await home.enterZipCode('2000')
    ;})


    await test.step('Verify the City field is visibale and clickable', async () => {
        await expect(await home.checkFieldCity()).toBeTruthy();
    });

    await test.step('Verify the Country field is visibale and clickable', async () => {
        await expect(await home.checkFieldCountry()).toBeTruthy();
    });

    await test.step('Verify the Phone field is visibale and clickable', async () => {
        await expect(await home.checkFieldPhone()).toBeTruthy();
    });
    await test.step('Enter Phone', async () => {
        await home.enterPhone('+38970777777')
    ;})

    await test.step('Verify the Newsletter button is visibale and clickable', async () => {
        await expect(await home.checkSelectNewsletter()).toBeTruthy();
        await home.selectNewsletter()
    });

    await test.step('Verify the Password field is visibale and clickable', async () => {
        await expect(await home.checkFieldPassword()).toBeTruthy();
    });
    await test.step('Enter Password', async () => {
        await home.enterPassword('Testing_123')
    ;})


    await test.step('Verify the Confirm Password field is visibale and clickable', async () => {
        await expect(await home.checkConfirmButton()).toBeTruthy();
    });
    await test.step('Conifrm Password', async () => {
        await home.confirmPassword('Testing_123')
    ;})


    await test.step('Verify the Confirm Submission field is visibale and clickable', async () => {
        await expect(await home.checkConfirmButton()).toBeTruthy();
    });

    await test.step('Click on Confirm button', async () => {
        await home.pressConfirmButton();
    });





});


/// ---------------------------------------------- LINKS PAGE REGISTRATION COMPANY NEGATIVE ---------------------------------------------- /// 

test(`Test Links Registration page as company - Negative test case`, async ({ page }) => {
    
    const home = new HomePage(page);
    
    await test.step('Go to Links Registration page', async () => {
        await page.goto('');
        await page.waitForLoadState('networkidle');
    });

    


    // --- SELECT COMPANY REGISTRATION --- //
    
    await test.step('Verify the Register as comnpany field is visible and clickable', async () => {
        await expect(await home.checkSelectCompany()).toBeTruthy();
    });
    await test.step('Select - Register as company', async () => {
        await home.selectCompany();})


    await test.step('Verify the Name field is visibale and clickable', async () => {
        await expect(await home.checkFieldNameVisibility()).toBeTruthy();
    });

    await test.step('Enter Name field is visibale and clickable', async () => {
        await home.enterName('');})

    await test.step('Verify the Surname field is visibale and clickable', async () => {
        await expect(await home.checkFieldSurnameVisibility()).toBeTruthy();
    });
    await test.step('Enter Name field is visibale and clickable', async () => {
        await home.enterSurname('')});
    
    await test.step('Verify the Email field is visibale and clickable', async () => {
        await expect(await home.checkFieldEmail()).toBeTruthy();
    });
    
    await test.step('Enter Email', async () => {
        await home.enterEmail('')
    ;})

    await test.step('Enter Password', async () => {
        await home.enterPassword('')
    ;})

    await test.step('Conifrm Password', async () => {
        await home.confirmPassword('')
    ;})

    await test.step('Click on Confirm button', async () => {
        await home.pressConfirmButton();
    });

    // ------------ Checking Required fields ------------ ///

    await test.step('Conifrm Name requirement', async () => {
        await home.checkRequiredName()
    ;})
    await test.step('Conifrm Surname requirement', async () => {
        await home.checkRequiredSurname()
    ;})
    await test.step('Conifrm Email requirement', async () => {
        await home.checkRequiredEmail()
    ;})
    await test.step('Conifrm Password requirement', async () => {
        await home.checkRequiredPassword()
    ;})
    await test.step('Conifrm Confirm Password requirement', async () => {
        await home.checkRequiredConfirmPassword()
    ;})




        

});

