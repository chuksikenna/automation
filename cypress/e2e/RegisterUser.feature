Feature: RegisterUser feature
  Feature This feature is required for registering a new user.
  Scenario: Create a new user account
    Given A user navigates url page
    When I click the sign up link
    When I enter my name
    When I enter my email
    When I click the sign up button
    Then I should see the "New User Signup!"page
    When I see the "Enter Account Information" section
    When I select my gender as "Male"
    When I type my name
    When I type my email
    When I enter my password
    When I enter my date of birth
    When I opt in for newsletters
    When I opt in for offers
    When I enter my first name
    When I enter my last name
    When I enter my company name
    When I enter my address1
    When I enter my address2
    When I select my country as "United States"
    When I select my state
    When I enter my city
    When I enter my zip code
    When I enter my mobile number
    When I click the create account button
    When I should see the "Account Created!" section
    When I click the delete account button
    Then I should see the "Account Deleted!" section
    When I click the continue button



