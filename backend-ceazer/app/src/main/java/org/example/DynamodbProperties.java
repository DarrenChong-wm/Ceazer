package org.example;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "aws")
public class DynamodbProperties {

    private String accessKey;
    private String secretKey;
    private String region;

    public String getAccessKey() {
        return accessKey;
    }

    public String getSecretKey() {
        return secretKey;
    }

    public String getRegion() {
        return region;
    }

    private void setAccessKey(String accessKey) {
        this.accessKey = accessKey;
    }

    private void setSecretKey(String secretKey) {
        this.secretKey = secretKey;
    }

    private void setRegion(String accessKey) {
        this.region = region;
    }
}
