web.init();//test it
web.open('http://docs.oxygenhq.org/about-video-tutorials.html');
//             link: link=Features
//       xpath:link: //a[contains(text(),\'Features\')]
// xpath:idRelative: //div[@id=\'topmenu\']/nav/ul/li[2]/a
//       xpath:href: //a[@href=\'http://oxygenhq.org/#features\']
//   xpath:position: //nav/ul/li[2]/a
//             css2: css=nav > ul > li:nth-child(2) > a
web.click('link=Features');
//       xpath:link: (//a[contains(text(),\'Documentation\')])[1]
// xpath:idRelative: //div[@id=\'features\']/div/div[3]/a[2]
//       xpath:href: //a[@href=\'http://docs.oxygenhq.org/\']
//   xpath:position: //div[3]/a[2]
//              css: css=#features > div.container > div.call-to-action > a.btn.info.large
//             css2: css=.call-to-action:nth-child(5) > .info
web.click('(//a[contains(text(),\'Documentation\')])[1]');
//             link: link=Home
//       xpath:link: //a[contains(text(),\'Home\')]
// xpath:idRelative: (//div[@id=\'topmenu\']/nav/ul/li/a)[1]
//       xpath:href: (//a[@href=\'http://oxygenhq.org/\'])[2]
//             css2: css=nav > ul > li:nth-child(1) > a
web.click('link=Home');
//       xpath:link: (//a[contains(text(),\'Learn More\')])[1]
// xpath:idRelative: //div[@id=\'main\']/div/div/div[2]/a[2]
//       xpath:href: (//a[@href=\'http://docs.oxygenhq.org\'])[2]
//   xpath:position: //div[2]/a[2]
//             css2: css=.call-to-action:nth-child(4) > .btn:nth-child(2)
web.click('(//a[contains(text(),\'Learn More\')])[1]');
// xpath:idRelative: //section[@id=\'content\']/div[2]/a/div
//   xpath:position: //a/div
//              css: css=div.arrow-right
//             css2: css=.arrow-right
web.click('//section[@id=\'content\']/div[2]/a/div');
