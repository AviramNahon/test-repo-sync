var caps = {
  "platformName": "Android",
  "platformVersion": "8.1.0",
  "deviceName": "2bc1200c9805",
  "appPackage": "com.miui.calculator",
  "appActivity": "com.miui.calculator.cal.CalculatorActivity",
  "automationName": "UIAutomator2"
};
mob.init(caps);

mob.transaction("go to convertor");
mob.waitForVisible("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.HorizontalScrollView/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.TextView");
var el1 = mob.findElement("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.HorizontalScrollView/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.TextView");
mob.click(el1);

mob.waitForVisible("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout[2]/miui.view.ViewPager/android.widget.LinearLayout/android.widget.LinearLayout/android.view.ViewGroup/android.widget.LinearLayout[1]/android.widget.ImageView");
var el2 = mob.findElement("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout[2]/miui.view.ViewPager/android.widget.LinearLayout/android.widget.LinearLayout/android.view.ViewGroup/android.widget.LinearLayout[1]/android.widget.ImageView");
mob.click(el2);

mob.transaction("calculate");
mob.waitForVisible("id=com.miui.calculator:id/btn_1");
var el3 = mob.findElement("id=com.miui.calculator:id/btn_1");
mob.click(el3);
mob.waitForVisible("id=com.miui.calculator:id/btn_8");
var el4 = mob.findElement("id=com.miui.calculator:id/btn_8");
mob.click(el4);
mob.waitForVisible("id=com.miui.calculator:id/btn_5");
var el5 = mob.findElement("id=com.miui.calculator:id/btn_5");
mob.click(el5);

mob.waitForVisible("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.RelativeLayout[3]/android.widget.RelativeLayout/android.widget.LinearLayout[1]/android.widget.ImageView");
var el6 = mob.findElement("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.RelativeLayout[3]/android.widget.RelativeLayout/android.widget.LinearLayout[1]/android.widget.ImageView");
mob.click(el6);


mob.waitForVisible("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ListView/android.widget.FrameLayout[7]/android.widget.LinearLayout/android.widget.TextView");
var el7 = mob.findElement("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ListView/android.widget.FrameLayout[7]/android.widget.LinearLayout/android.widget.TextView");
mob.click(el7);

