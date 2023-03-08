package org.example.userauthservice.controller;

import org.example.userauthservice.domain.UserDetails;
import org.example.userauthservice.exception.InvalidUserDetailsException;
import org.example.userauthservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1")
public class UserController {
    private ResponseEntity responseEntity;


    private UserService userService;
    @Autowired
    public UserController(UserService userService)
    {
        this.userService = userService;
    }
    @PostMapping("/register")
    public ResponseEntity loginUser(@RequestBody UserDetails userDetails){
        System.out.println("within login user");
        return new ResponseEntity(userService.saveUser(userDetails), HttpStatus.CREATED);
    }

    @PostMapping("/loginAuthenticateUser")
    public ResponseEntity getAuthenticatedUDetails(@RequestBody UserDetails userDetails) {
        System.out.println("authenticated24165"+userDetails.getEmail());
        UserDetails userDetails1 = null;
        try {
            userDetails1 = userService.authenticateUser(userDetails.getEmail(), userDetails.getPassword());
            if (userDetails.getEmail().equals(userDetails1.getEmail())) {
                System.out.println("authenticated");
            }
        } catch (InvalidUserDetailsException e) {
            throw new RuntimeException(e);
        } catch (Exception e) {
            return new ResponseEntity<>("Try after some time!!!", HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<>(userDetails1, HttpStatus.OK);
    }


}
