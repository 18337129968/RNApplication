package com.isoftstone.rnapplication;

import android.os.Bundle;

import com.facebook.react.ReactActivity;

import javax.annotation.Nullable;

public class MainActivity extends ReactActivity {

    @Nullable
    @Override
    protected String getMainComponentName() {
        return "HelloWorld";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
//        setContentView(R.layout.activity_main);
    }
}
