var caps =
{  
  "appPackage": "com.android.calculator2",
  "appActivity": "com.android.calculator2.Calculator",
  "automationName": "UIAutomator2"
}
mob.transaction("Init");
mob.init(caps);

mob.waitForVisible("id=com.android.calculator2:id/digit_"+'${Num1}', 5000);

mob.transaction("Press '8'");
var el1 = mob.findElement("id=com.android.calculator2:id/digit_"+'${Num1}');
mob.click(el1);

mob.transaction("Press '+'");
mob.waitForVisible("~plus", 5000);
var el2 = mob.findElement("~plus");
mob.click(el2);

mob.transaction("Press '7'");
mob.waitForVisible("id=com.android.calculator2:id/digit_7", 5000);
var el3 = mob.findElement("id=com.android.calculator2:id/digit_"+'${Num2}');
mob.click(el3);

mob.transaction("Press '='");
mob.waitForVisible("~equals", 5000);
var el4 = mob.findElement("~equals");
mob.click(el4);

mob.transaction("Validate the Result");
mob.waitForVisible("id=com.android.calculator2:id/result", 5000);
mob.assertText("id=com.android.calculator2:id/result", "${Result}");
