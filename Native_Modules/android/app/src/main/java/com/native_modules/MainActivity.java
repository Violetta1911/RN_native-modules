package com.native_modules;
import android.os.Bundle;
import com.rnfs.RNFSPackage; 

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "Native_Modules";
  }
  @Override
  protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}

}
