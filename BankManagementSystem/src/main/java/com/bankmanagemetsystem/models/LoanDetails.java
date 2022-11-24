package com.bankmanagemetsystem.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "loan_details")
public class LoanDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	String accountType;
	String loanType;
	float rateOfIntrest;
	double amount;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getAccountType() {
		return accountType;
	}

	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}

	public float getRateOfIntrest() {
		return rateOfIntrest;
	}

	public void setRateOfIntrest(float rateOfIntrest) {
		this.rateOfIntrest = rateOfIntrest;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getLoanType() {
		return loanType;
	}

	public void setLoanType(String loanType) {
		this.loanType = loanType;
	}

	public LoanDetails(int id, String accountType, String loanType, float rateOfIntrest, double amount) {
		super();
		this.id = id;
		this.accountType = accountType;
		this.loanType = loanType;
		this.rateOfIntrest = rateOfIntrest;
		this.amount = amount;
	}

	public LoanDetails() {
		super();
	}

}
