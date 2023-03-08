package org.example.calculationservice.service;

import org.example.calculationservice.domain.LogDetails;

import java.util.List;

public interface LogService {
    LogDetails addLogs(LogDetails logDetails);

    List<LogDetails> getLogs();
}
