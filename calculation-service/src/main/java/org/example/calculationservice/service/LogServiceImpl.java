package org.example.calculationservice.service;

import org.example.calculationservice.domain.LogDetails;
import org.example.calculationservice.repository.LogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LogServiceImpl implements LogService {
    private LogRepository logRepository;

    @Autowired
    public LogServiceImpl(LogRepository logRepository){
        this.logRepository = logRepository;
    }


    @Override
    public LogDetails addLogs(LogDetails logDetails) {
        return logRepository.save(logDetails);
    }

    @Override
    public List<LogDetails> getLogs() {
        return logRepository.findAll();
    }
}
