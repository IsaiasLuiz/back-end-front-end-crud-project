package com.project.crud.model.exception;

public class CourseNotFoundException extends BrokenBusinessRuleException {

    public CourseNotFoundException() {
    }

    public CourseNotFoundException(final String s) {
        super(s);
    }

    public CourseNotFoundException(final String s, final Throwable throwable) {
        super(s, throwable);
    }

    public CourseNotFoundException(final Throwable throwable) {
        super(throwable);
    }

    public CourseNotFoundException(final String s, final Throwable throwable, final boolean b, final boolean b1) {
        super(s, throwable, b, b1);
    }

}
