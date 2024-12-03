package backend.backend_ceazer;

import lombok.Data;

@Data
public class AuthRequest {
    private String username;
    private String password;
}
