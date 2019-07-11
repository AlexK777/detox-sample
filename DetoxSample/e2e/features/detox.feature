Feature: Detox Sample

  Scenario: Run test
    Given I have launched the app
    Then I should see some text

    Scenario: Run another test
      Given I have launched the app
      Then I should be able to scroll down to the bottom
