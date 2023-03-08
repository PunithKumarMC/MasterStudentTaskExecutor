package org.example.userauthservice.service;

import org.example.userauthservice.domain.UserDetails;
import org.example.userauthservice.exception.InvalidUserDetailsException;
import org.example.userauthservice.exception.UserNotFoundException;
import org.example.userauthservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;
    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @Override
    public UserDetails saveUser(UserDetails userDetails) {
        return userRepository.save(userDetails);
    }

    @Override
    public UserDetails findByEmailIdAndPassword(String email, String password) throws UserNotFoundException {
        UserDetails user =  userRepository.findByEmailAndPassword(email,password);
        if(user == null){
            throw new UserNotFoundException();
        }
        return user;
    }

    @Override
    public UserDetails authenticateUser(String email, String password) throws InvalidUserDetailsException {
        UserDetails user=userRepository.findByEmailAndPassword(email,password);
        if (user==null){
            throw  new InvalidUserDetailsException();
        }else {
            return userRepository.findByEmailAndPassword(email,password);
        }


    }
}
