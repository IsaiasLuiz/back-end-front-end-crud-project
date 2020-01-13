package com.project.crud.model.exception;

public class InvalidCoursePeriod extends BrokenBusinessRuleException {

    public InvalidCoursePeriod() {
    }

    public InvalidCoursePeriod(final String s) {
        super(s);
    }

    public InvalidCoursePeriod(final String s, final Throwable throwable) {
        super(s, throwable);
    }

    public InvalidCoursePeriod(final Throwable throwable) {
        super(throwable);
    }

    public InvalidCoursePeriod(final String s, final Throwable throwable, final boolean b, final boolean b1) {
        super(s, throwable, b, b1);
    }

}
