# singlish-to-sinhala
# Singlish to Sinhala Translator – Playwright Test Suite

## Overview
This repository contains an automated test suite developed using **Playwright** to validate the functionality, accuracy, and usability of the **SwiftTranslator – Singlish to Sinhala Translator** web application.

The test suite focuses on verifying:
- Correct conversion of Singlish text into Sinhala
- Handling of real-world informal language, slang, and mixed English–Sinhala usage
- Negative and edge-case behavior
- Real-time UI translation updates while typing

This project is intended for **academic evaluation and quality assurance practice**.

---

## Technologies Used
- **Node.js**
- **Playwright Test Framework**
- **JavaScript**
- **Git & GitHub**

---

## Project Structure
IT23425668/
│
├── tests/
│ └── singlish-to-sinhala.spec.js
│
├── playwright.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── .github/


---

## Test Coverage

### 1. Positive Functional Tests
- Valid Singlish sentences converted to Sinhala
- Informal conversations, slang, and mixed English words
- Dates, times, currency values, and punctuation
- Long paragraph translations

### 2. Negative Functional Tests
- Inputs already in Sinhala
- Incorrect or ambiguous Singlish
- Spacing and formatting inconsistencies
- Mixed casing and non-standard inputs

### 3. UI Functionality Tests
- Real-time translation updates while typing
- Partial input validation
- Output field responsiveness

---

## Test Design Approach
- **Black-box testing** approach
- Data-driven test execution
- Reusable page object model (`TranslatorPage`)
- Explicit waits to ensure UI stability
- Clear separation of test data and test logic

---

## Setup Instructions

### Prerequisites
- Node.js (v18 or later recommended)
- Git

### Installation
```bash
npm install
Install Playwright Browsers
npx playwright install
Running Tests
Run all tests
npx playwright test
Run tests with HTML report
npx playwright test --reporter=html
View the report:

npx playwright show-report
Assumptions & Limitations
Tests depend on the availability of the SwiftTranslator website

Translation accuracy is validated against expected outputs defined in test data

Minor linguistic variations may cause test failures if the translation engine changes

Future Enhancements
Add cross-browser testing (Firefox, WebKit)

Integrate GitHub Actions for CI/CD

Add performance and load testing

Expand dataset for regional language variations

Author
Student ID: IT23425668
Purpose: Academic coursework / Software Quality Assurance testing

License
This project is intended for educational use only.
