package org.example.calculationservice.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class LogDetails {
    private int num1;
    private String symbol;
    private int num2;
    private String email;
    private int result;
}
