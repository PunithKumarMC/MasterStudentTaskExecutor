package org.example.calculationservice.repository;

import org.example.calculationservice.domain.LogDetails;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LogRepository extends MongoRepository<LogDetails,Integer> {
}
