//java -Dwebdriver.chrome.driver=chromedriver.exe -Dwebdriver.ie.driver=IEDriverServer.exe -jar selenium-server-standalone-3.14.0.jar -port 44444 -timeout 320 -browserTimeout 320
web.init();
web.open('https://text-compare.com/');
//               id: id=inputText1
//             name: name=text1
//              css: css=#inputText1
// xpath:attributes: //textarea[@id=\'inputText1\']
// xpath:idRelative: //form[@id=\'textCompareForm\']/div/textarea
//   xpath:position: //textarea
web.type('id=inputText1', 'dd');
//               id: id=inputText2
//             name: name=text2
//              css: css=#inputText2
// xpath:attributes: //textarea[@id=\'inputText2\']
// xpath:idRelative: //form[@id=\'textCompareForm\']/div/textarea[2]
//   xpath:position: //textarea[2]
web.type('id=inputText2', 'ggg');
//              css: css=div.compareButtonText
// xpath:idRelative: //button[@id=\'compareButton\']/div
//   xpath:position: //button/div
web.click('css=div.compareButtonText');
web.assertText("id=logo", "Text Comre!");
web.assertText("id=compareButton", "Compare!")