package com.bankmanagemetsystem.exception;

public class LoanAppException extends Exception {

	private static final long serialVersionUID = 4572159274568432702L;

	public LoanAppException() {

	}

	public LoanAppException(String message) {
		super(message);
	}

	public LoanAppException(Throwable e) {
		super(e);
	}

	public LoanAppException(String message, Throwable e) {
		super(message, e);
	}
}
