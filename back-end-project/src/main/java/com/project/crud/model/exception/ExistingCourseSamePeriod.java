package com.project.crud.model.exception;

public class ExistingCourseSamePeriod extends BrokenBusinessRuleException {

    public ExistingCourseSamePeriod() {
    }

    public ExistingCourseSamePeriod(final String s) {
        super(s);
    }

    public ExistingCourseSamePeriod(final String s, final Throwable throwable) {
        super(s, throwable);
    }

    public ExistingCourseSamePeriod(final Throwable throwable) {
        super(throwable);
    }

    public ExistingCourseSamePeriod(final String s, final Throwable throwable, final boolean b, final boolean b1) {
        super(s, throwable, b, b1);
    }

}
