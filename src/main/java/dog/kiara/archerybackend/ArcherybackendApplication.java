package dog.kiara.archerybackend;

import com.google.auth.oauth2.AccessToken;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import lombok.SneakyThrows;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.FileInputStream;

@SpringBootApplication
public class ArcherybackendApplication {

    @SneakyThrows
    public static void main(String[] args) {
        SpringApplication.run(ArcherybackendApplication.class, args);
        FileInputStream serviceAccount =
                new FileInputStream("serviceAccountKey.json");

        FirebaseOptions options = new FirebaseOptions.Builder()
                .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                .setDatabaseUrl("https://archery-1337.firebaseio.com")
                .build();

        FirebaseApp.initializeApp(options, "backend");
    }

}
