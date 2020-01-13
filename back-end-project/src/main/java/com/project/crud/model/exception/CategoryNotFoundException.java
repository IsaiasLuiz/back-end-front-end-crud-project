package com.project.crud.model.exception;

public class CategoryNotFoundException extends BrokenBusinessRuleException {

    public CategoryNotFoundException() {
    }

    public CategoryNotFoundException(final String s) {
        super(s);
    }

    public CategoryNotFoundException(final String s, final Throwable throwable) {
        super(s, throwable);
    }

    public CategoryNotFoundException(final Throwable throwable) {
        super(throwable);
    }

    public CategoryNotFoundException(final String s, final Throwable throwable, final boolean b, final boolean b1) {
        super(s, throwable, b, b1);
    }

}
