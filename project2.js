web.init();
web.open('https://www.udemy.com/');
//               id: id=header.browse
//             link: link=Categories
// xpath:attributes: //a[@id=\'header.browse\']
// xpath:idRelative: //body[@id=\'udemy\']/div/div[2]/div/div[2]/div[2]/div/a
//       xpath:href: //a[contains(@href, \'javascript:void(0)\')]
//   xpath:position: //div[2]/div/a
web.click('id=header.browse');
// xpath:idRelative: //body[@id=\'udemy\']/div/div[2]/div/div[2]/div[2]/div/ul/li/ul/li/div/div/ul/li/a/span
//   xpath:position: //div/ul/li/a/span
web.click('//body[@id=\'udemy\']/div/div[2]/div/div[2]/div[2]/div/ul/li/ul/li/div/div/ul/li/a/span');
//              css: css=div.topic-button--display-name--mv-7j
// xpath:idRelative: //body[@id=\'udemy\']/div/div[3]/div/div/div/div[3]/div/div[2]/div[2]/a/div
//   xpath:position: //div[2]/a/div
web.click('css=div.topic-button--display-name--mv-7j');
