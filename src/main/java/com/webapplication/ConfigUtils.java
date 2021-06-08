package com.webapplication;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class ConfigUtils {

	public static String getValue(String key) throws IOException {
		try {
			InputStream input = new FileInputStream("serenity.properties");
			Properties prop = new Properties();
            prop.load(input);
            return prop.getProperty(key);
            
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
}
