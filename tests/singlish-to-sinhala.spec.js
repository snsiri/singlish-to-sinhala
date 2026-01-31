const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
    // Simple Sentences
    {
      tcId: 'Pos_Fun_0001',
      name: '',
      input: 'suBha anaagathayak!',
      expected: 'සුභ අනාගතයක්!',
      category: '',
      grammar: '',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0002',
      name: '',
      input: 'oyaa kadeeta giyaadha?',
      expected: 'ඔයා කඩේට ගියාද?',
      category: '',
      grammar: '',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0003',
      name: '',
      input: 'eyaa iiye iskole giyaa',
      expected: 'එයා ඊයෙ ඉස්කොලෙ ගියා',
      category: '',
      grammar: '',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0004',
      name: '',
      input: 'oyaa kaemathinam api library ekata yamu.',
      expected: 'ඔයා කැමතිනම් අපි library එකට යමු.',
      category: '',
      grammar: '',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0005',
      name: '',
      input: 'adha vaeda vaediineh, adha mehen kaala anith dhavase eliyen kamu.',
      expected: 'අද වැඩ වැඩීනෙහ්, අද මෙහෙන් කාල අනිත් දවසෙ එලියෙන් කමු.',
      category: '',
      grammar: '',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0006',
      name: '',
      input: 'vaedee anivaaryen karanna.',
      expected: 'වැඩේ අනිවාර්යෙන් කරන්න.',
      category: '',
      grammar: '',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0007',
      name: '',
      input: 'OMG! eeka maru!',
      expected: 'OMG! ඒක මරු!',
      category: '',
      grammar: '',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0008',
      name: '',
      input: 'oonenaethi vaeda karanna epaa',
      expected: 'ඕනෙනැති වැඩ කරන්න එපා',
      category: '',
      grammar: '',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0009',
      name: '',
      input: 'siyaluma sisun 29/02/2026 vana dhina   udhaesana 9.00 vana vita pradhana shaalaavata raesvanna.',
      expected: 'සියලුම සිසුන් 29/02/2026 වන දින   උදැසන 9.00 වන විට ප්‍රදන ශාලාවට රැස්වන්න.',
      category: '',
      grammar: '',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0010',
      name: '',
      input: `mama 8.00AM ta vithara LIC ta ID ekee photo eka email kalaa.
        eth reply ekak nae.
        oyath enavadha maath ekka office ekata yanna?`,
      expected: `මම 8.00AM ට විතර LIC ට ID එකේ photo එක email කලා.
        එත් reply එකක් නැ.
        ඔයත් එනවද මාත් එක්ක office එකට යන්න?`,
      category: '',
      grammar: '',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0011',
      name: '',
      input: 'machan, heta raesviimata enna',
      expected: 'මචන්, හෙට රැස්වීමට එන්න',
      category: '',
      grammar: '',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0012',
      name: '',
      input: 'oyaa avurudhdhakin 5cm usa gihin thibboth man oyaata RS. 10000k dhenavaa',
      expected: 'ඔයා අවුරුද්දකින් 5cm උස ගිහින් තිබ්බොත් man ඔයාට RS. 10000ක් දෙනවා',
      category: '',
      grammar: '',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0013',
      name: '',
      input: 'mama iiyeth campus aavaa. mee adhath enagaman. hetath enavaa.',
      expected: 'මම ඊයෙත් campus ආවා. මේ අදත් එනගමන්. හෙටත් එනවා.',
      category: '',
      grammar: '',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0014',
      name: '',
      input: 'haa haa, uBA kata vahan hitapanko',
      expected: 'හා හා, උඹ කට වහන් හිටපන්කො',
      category: '',
      grammar: '',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0015',
      name: '',
      input: 'karuNAakara nishshabdhavii niveedhanayata savan dhenna.',
      expected: 'කරුණාකර නිශ්ශබ්දවී නිවේදනයට සවන් දෙන්න.',
      category: '',
      grammar: '',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0016',
      name: '',
      input: 'dhuka naee',
      expected: 'දුක නෑ',
      category: '',
      grammar: '',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0017',
      name: '',
      input: 'mata godak mahansiyi',
      expected: 'මට ගොඩක් මහන්සියි',
      category: '',
      grammar: '',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0018',
      name: '',
      input: 'mama Instagram vala dhaekkaa AI bubble eka burst venna ida thiyanvaa kiyalaa thiyanavaa. eeka nisaa stock market ekee ehema salli dhaemmata vaedak naeelu. anika gold vala gaaNath vaedi nisaa silver valata invest karana ekalu hodhama. CPU, solar panels vagee dheval hadhanna silver oone vena nisaa silver vala price eka issarahata thava vaedi veyi kiyalaa kiyanavaa.',
      expected: 'මම Instagram වල දැක්කා AI bubble එක burst වෙන්න ඉඩ තියන්වා කියලා තියනවා. ඒක නිසා stock market එකේ එහෙම සල්ලි දැම්මට වැඩක් නෑලු. අනික gold වල ගාණත් වැඩි නිසා silver වලට invest කරන එකලු හොදම. CPU, solar panels වගේ දෙවල් හදන්න silver ඕනෙ වෙන නිසා silver වල price එක ඉස්සරහට තව වැඩි වෙයි කියලා කියනවා.',
      category: '',
      grammar: '',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0019',
      name: '',
      input: 'ov, oyaa oya kiyana eka matath hithunaa mokadha, gold 1g vala price eka adha 10.50PM vedhdhi USD 4906.56 ta adu velaa thibunaa.',
      expected: 'ඔව්, ඔයා ඔය කියන එක මටත් හිතුනා මොකද, gold 1g වල price එක අද 10.50PM වෙද්දි USD 4906.56 ට අඩු වෙලා තිබුනා.',
      category: '',
      grammar: '',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0020',
      name: '',
      input: 'ayiyo, ehema kiyanna epaa. api monavaa hari karalaa ooka goda dhaagamu.',
      expected: 'අයියො, එහෙම කියන්න එපා. අපි මොනවා හරි කරලා ඕක ගොඩ දාගමු.',
      category: '',
      grammar: '',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0021',
      name: '',
      input: 'anee mandha! mata nam epaa venavaa. meyalaata maasa 3k vithara thibilath timetable ekak hariyata hadhaa ganna baeeneh.',
      expected: 'අනේ මන්ද! මට නම් එපා වෙනවා. මෙයලාට මාස 3ක් විතර තිබිලත් timetable එකක් හරියට හදා ගන්න බෑනෙහ්.',
      category: '',
      grammar: '',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0022',
      name: '',
      input: 'oyaata vaedak naethi dheval nam mathakayi. haebayi vaedak aethi deval mukuth mathaka nae',
      expected: 'ඔයාට වැඩක් නැති දෙවල් නම් මතකයි. හැබයි වැඩක් ඇති ඩෙවල් මුකුත් මතක නැ',
      category: '',
      grammar: '',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0023',
      name: '',
      input: 'mata mul lecture ekee kiyapu dheeval theruNAA. eth iitapasse lecture ekee kiyapu dheeval theruNEE naehae',
      expected: 'මට මුල් lecture එකේ කියපු දේවල් තෙරුණා. එත් ඊටපස්සෙ lecture එකේ කියපු දේවල් තෙරුණේ නැහැ',
      category: '',
      grammar: '',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0024',
      name: '',
      input: 'oyaa DB ekata data dhaemmadha? naethnam eetika dhaanna, asap! aluth CFO dhaen eeva gaena aehuvaa. manussayath ekka nam lesi naee vagee. team lead nam cooked. LOL!',
      expected: 'ඔයා DB එකට data දැම්මද? නැත්නම් ඒටික දාන්න, asap! අලුත් CFO දැන් ඒව ගැන ඇහුවා. මනුස්සයත් එක්ක නම් ලෙසි නෑ වගේ. team lead නම් cooked. LOL!',
      category: '',
      grammar: '',
      length: 'S'
    }
    // {
    //   tcId: 'Pos_Fun_0025',
    //   name: '',
    //   input: '',
    //   expected: '',
    //   category: '',
    //   grammar: '',
    //   length: 'S'
    // },

    
  ],
  
  negative: [
    {
      tcId: 'Neg_Fun_0001',
      name: '',
      input: 'ඔයා මං කියන දේත් පොඩ්ඩක් අහන්නකො',
      expected: 'මමයකඩඇණගොඩක්සල්ලිවලටගත්තා',
      category: '',
      grammar: '',
      length: ''
    },
    {
      tcId: 'Neg_Fun_0002',
      name: '',
      input: 'oyaa man kiyana dheeth poddak ahannako',
      expected: 'ඔයා මං කියන දේත් පොඩ්ඩක් අහන්නකො',
      category: '',
      grammar: '',
      length: ''
    },
    {
      tcId: 'Neg_Fun_0003',
      name: '',
      input: 'api semester ekakata rupiyal 300k kata aasanna mudhalak SLIIT ekata gevannemu.',
      expected: 'අපි semester එකකට රුපියල් 300k කට ආසන්න මුදලක් SLIIT එකට ගෙවන්නෙමු.',
      category: '',
      grammar: '',
      length: ''
    },
    {
      tcId: 'Neg_Fun_0004',
      name: '',
      input: 'magee yaaluvaa ee manussayata muuNatama nokiya kivvaa eyaa moodayi kiyalaa. eeth ee manussayata therunNeh naeeneh. lol!',
      expected: 'මගේ යාළුවා ඒ මනුස්සයට මූණටම නොකිය කිව්වා එයා මෝඩයි කියලා. ඒත් ඒ මනුස්සයට තෙරුණෙහ් නෑනෙහ්. lol!',
      category: '',
      grammar: '',
      length: ''
    },
    {
      tcId: 'Neg_Fun_0005',
      name: '',
      input: 'oluva athagaala balanna, oyaata an avilladha kiyala.',
      expected: 'ඔලුව අතගාල බලන්න, ඔයාට අං අවිල්ලද කියලා.',
      category: '',
      grammar: '',
      length: ''
    },
    {
      tcId: 'Neg_Fun_0006',
      name: '',
      input: 'udhawwak oone nam kiyanna. asalwaasiyo ekinekaata udhawu karaganna oona.',
      expected: 'උදව්වක් ඕනෙ නම් කියන්න. අසල්වාසියො එකිනෙකාට උදවු කරගන්න ඕන.',
      category: '',
      grammar: '',
      length: ''
    },
    {
      tcId: 'Neg_Fun_0007',
      name: '',
      input: 'oyaa iiye libraryekata giyaadha? mama      adha yanna inne. oyaa iiye giyee naethnam, oyath enavadha maath ekka library ekata yanna',
      expected: 'ඔයා ඊයෙ library එකට ගියාද? මම      අද යන්න ඉන්නේ. ඔයා ඊයෙ ගියේ නැත්නම්, ඔයත් එනවද මාත් එක්ක library එකට යන්න',
      category: '',
      grammar: '',
      length: ''
    },
    {
      tcId: 'Neg_Fun_0008',
      name: '',
      input: 'okayokay mama mee yanagaman. Bye',
      expected: 'okay okay මම මේ යනගමන්. bye',
      category: '',
      grammar: '',
      length: ''
    },

    {
      tcId: 'Neg_Fun_0009',
      name: '',
      input: 'oyaa kiyanne ee ring eka real gold kiyaladha. real gold unaata vadak nae bara aduyi neh. eeka nisaa value eka aduyi. anith eka machine valin cut velaa enakota thavath value eka aduyi.',
      expected: 'ඔය කියන්නෙ ඒ ring එක රේල් gold කියලද. රේල් gold උනාට වඩක් නැ බර අඩුයි නෙහ්. ඒක නිසා value එක අඩුයි. අනිත් එක machine වලින් cut වෙලා එනකොට තවත් value එක අඩුයි. ',
      category: '',
      grammar: '',
      length: ''
    },
    {
      tcId: 'Neg_Fun_0010',
      name: '',
      input: 'iiLaGA maasee gala ekak thiyanavaa breast cancer awareness vaedi karanna. oyata announcing karanna puLuvandha? eeka oyaagee reputation ekatath hoDHAyi ee vageema samaaja seevayakuth neh? godaak naLu niLiyoth enavaa gala ekata. roosa paata ribbon use karanava event eka represent  karanna. media valatath aaraaDhanaa karala thiyenne. mee saeree gala eka lokuvata thiyeyi.',
      expected: 'ඊළඟ මාසේ gala එකක් තියනවා breast cancer awareness වැඩි කරන්න. ඔයට announcing කරන්න පුළුවන්ද? ඒක ඔයාගේ reputation එකටත් හොඳයි ඒ වගේම සමාජ සේවයකුත් නෙහ්? ගොඩාක් නළු නිළියොත් එනවා gala එකට. රෝස පාට ribbon use කරනව event එක represent  කරන්න. media වලටත් ආරාධනා කරල තියෙන්නෙ. මේ සැරේ gala එක ලොකුවට තියෙයි.',
      category: '',
      grammar: '',
      length: ''
    }
    // {
    //   tcId: 'Neg_Fun_000',
    //   name: '',
    //   input: '',
    //   expected: '',
    //   category: '',
    //   grammar: '',
    //   length: ''
    // },

  ],
  
  ui: {
    tcId: 'Pos_UI_001',
    name: 'Real-time translation updates as typing',
    input: 'mama kaeema kannavaa',
    partialInput: 'mama kae',
    expectedFull: 'මම කෑම කන්නවා',
    category: 'Usability flow',
    grammar: 'Present tense',
    length: 'S'
  }
};

// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url, { timeout: 60000 });
    await this.page.waitForLoadState('domcontentloaded');
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      // Type partial input
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      
      // Wait for partial output
      await page.waitForTimeout(1500);
      
      // Verify partial translation appears
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      // Complete typing
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      // Wait for full translation
      await translator.waitForOutput();
      
      // Verify full translation
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});
