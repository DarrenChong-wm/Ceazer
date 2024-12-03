package backend.backend_ceazer;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

// import backend.backend_ceazer.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
