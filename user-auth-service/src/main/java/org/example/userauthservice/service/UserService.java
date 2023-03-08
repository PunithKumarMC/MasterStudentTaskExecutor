package org.example.userauthservice.service;

import org.example.userauthservice.domain.UserDetails;
import org.example.userauthservice.exception.InvalidUserDetailsException;
import org.example.userauthservice.exception.UserNotFoundException;

public interface UserService {
    public UserDetails saveUser(UserDetails userDetails);

    public UserDetails findByEmailIdAndPassword(String email, String password) throws UserNotFoundException;

    UserDetails authenticateUser(String userName, String password) throws InvalidUserDetailsException;
}
