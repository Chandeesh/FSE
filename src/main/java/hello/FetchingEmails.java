package hello;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Properties;

import javax.mail.Session;
import javax.mail.Address;
import javax.mail.Folder;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.NoSuchProviderException;
import javax.mail.Part;
import javax.mail.Session;
import javax.mail.Store;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;

import com.sun.mail.util.MailSSLSocketFactory;

public class FetchingEmails {

	   public static void fetch(String pop3Host, String storeType, String user,
	      String password) {
		   TrustManager[] trustAllCerts = new TrustManager[]{
		   new X509TrustManager() {
			    public java.security.cert.X509Certificate[] getAcceptedIssuers() {
			        return null;
			    }
			    public void checkClientTrusted(
			        java.security.cert.X509Certificate[] certs, String authType) {
			    }
			    public void checkServerTrusted(
			        java.security.cert.X509Certificate[] certs, String authType) {
			    }
			}};

			   try {
			    SSLContext sc = SSLContext.getInstance("SSL");
			    sc.init(null, trustAllCerts, new java.security.SecureRandom());
			    HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());
			    } catch (Exception e) {
			    }
	      try {
	         // create properties field
	    	  System.setProperty("javax.net.ssl.trustStore", "C:\\Program Files\\Java\\jdk1.8.0_121\\jre\\lib\\security\\cacerts");
	    	  MailSSLSocketFactory sf = new MailSSLSocketFactory();
	    	  sf.setTrustAllHosts(true); 
	    	  
	         Properties properties = new Properties();
	         properties.put("mail.store.protocol", "pop3");
	         properties.put("mail.pop3s.host", pop3Host);
	         properties.put("mail.pop3s.port", "995");
	         properties.put("mail.pop3s.starttls.enable", "true");
	         properties.put("mail.pop3s.ssl.trust", "*");
	    	 properties.put("mail.pop3s.ssl.socketFactory", sf);
	         Session emailSession = Session.getDefaultInstance(properties);
	         // emailSession.setDebug(true);

	         // create the POP3 store object and connect with the pop server
	         Store store = emailSession.getStore("pop3s");
System.out.println("*****");
	         store.connect(pop3Host, user, password);
System.out.println("Connected");
Folder emailFolder = store.getFolder("INBOX");
emailFolder.open(Folder.READ_ONLY);

BufferedReader reader = new BufferedReader(new InputStreamReader(
 System.in));

// retrieve the messages from the folder in an array and print it
Message[] messages = emailFolder.getMessages();
System.out.println("messages.length---" + messages.length);


   Message message = messages[75];
   System.out.println("Subject: " + message.getSubject());   

	      } catch (NoSuchProviderException e) {
	         e.printStackTrace();
	      } catch (MessagingException e) {
	         e.printStackTrace();
	      } catch (Exception e) {
	         e.printStackTrace();
	      }
	   }
	   public static void main(String[] args) {

	      String host = "pop.gmail.com";// change accordingly
	      String mailStoreType = "pop3";
	      String username = 
	         "chrissantos393@gmail.com";// change accordingly
	      String password = "chrissantos3931";// change accordingly

	      //Call method fetch
	      fetch(host, mailStoreType, username, password);

	   }
}