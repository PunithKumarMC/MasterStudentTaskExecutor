package org.example.calculationservice.controller;

import org.example.calculationservice.domain.LogDetails;
import org.example.calculationservice.service.LogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1")
public class Logcontroller {
    private LogService logService;

    @Autowired
    public Logcontroller(LogService logService){
        this.logService = logService;
    }

    @PostMapping("/savelog")
    public ResponseEntity<?> savelogs(@RequestBody LogDetails logDetails) {
        System.out.println("save log");
        return new ResponseEntity<>(logService.addLogs(logDetails), HttpStatus.CREATED);
    }

    @GetMapping("/getlog")
    public ResponseEntity<List<LogDetails>> getAllRegisteredUsers() {
        System.out.println("get log");
        return new ResponseEntity<List<LogDetails>>(logService.getLogs(), HttpStatus.OK);
    }
}
