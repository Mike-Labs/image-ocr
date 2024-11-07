package io.ionic.starter;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import com.google.firebase.FirebaseApp; // Import Firebase

public class MainActivity extends BridgeActivity {

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initialize Firebase
    FirebaseApp.initializeApp(this); // This ensures Firebase is initialized before use
  }
}






//package io.ionic.starter;
//
//import android.app.Application;
//import com.google.firebase.FirebaseApp;
//
//public class MyApplication extends Application {
//    @Override
//    public void onCreate() {
//        super.onCreate();
//
//        FirebaseApp.initializeApp(this);
//    }
//}




// package io.ionic.starter;
//
// import com.getcapacitor.BridgeActivity;
//
// public class MainActivity extends BridgeActivity {}
