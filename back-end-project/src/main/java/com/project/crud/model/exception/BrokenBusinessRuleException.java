package com.project.crud.model.exception;

public class BrokenBusinessRuleException extends Exception {

    public BrokenBusinessRuleException() {
    }

    public BrokenBusinessRuleException(final String s) {
        super(s);
    }

    public BrokenBusinessRuleException(final String s, final Throwable throwable) {
        super(s, throwable);
    }

    public BrokenBusinessRuleException(final Throwable throwable) {
        super(throwable);
    }

    public BrokenBusinessRuleException(final String s, final Throwable throwable, final boolean b, final boolean b1) {
        super(s, throwable, b, b1);
    }

}
