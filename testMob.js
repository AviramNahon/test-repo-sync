//mob
var caps =
{  
  "appPackage": "com.android.calculator2",
  "appActivity": "com.android.calculator2.Calculator",
  "automationName": "UIAutomator2"
}
mob.transaction("Init");
mob.init(caps);

mob.waitForVisible("id=com.android.calculator2:id/digit_"+'${Num1}', 5000);
