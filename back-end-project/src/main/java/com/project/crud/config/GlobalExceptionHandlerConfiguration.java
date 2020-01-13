package com.project.crud.config;

import com.project.crud.model.exception.BrokenBusinessRuleException;
import com.project.crud.model.exception.CategoryNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandlerConfiguration {

    @ExceptionHandler(BrokenBusinessRuleException.class)
    public final ResponseEntity<Object> categoryNotFound(final BrokenBusinessRuleException BrokenBusinessRuleException) {
        return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(BrokenBusinessRuleException.getMessage());
    }

}
