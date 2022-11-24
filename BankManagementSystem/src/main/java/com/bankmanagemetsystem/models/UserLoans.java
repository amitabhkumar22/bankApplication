package com.bankmanagemetsystem.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user_loan_details")
public class UserLoans {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private int profileId;
	private String accountType;
	private float rateOfIntrest;
	private double amount;
	private int years;
	private long loanTakenDate;
	private long loanEndDate;

	public int getProfileId() {
		return profileId;
	}

	public void setProfileId(int profileId) {
		this.profileId = profileId;
	}

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

	public int getYears() {
		return years;
	}

	public void setYears(int years) {
		this.years = years;
	}

	public long getLoanTakenDate() {
		return loanTakenDate;
	}

	public void setLoanTakenDate(long loanTakenDate) {
		this.loanTakenDate = loanTakenDate;
	}

	public long getLoanEndDate() {
		return loanEndDate;
	}

	public void setLoanEndDate(long loanEndDate) {
		this.loanEndDate = loanEndDate;
	}

	public UserLoans(int id, int profileId, String accountType, float rateOfIntrest, double amount, int years,
			long loanTakenDate, long loanEndDate) {
		super();
		this.id = id;
		this.profileId = profileId;
		this.accountType = accountType;
		this.rateOfIntrest = rateOfIntrest;
		this.amount = amount;
		this.years = years;
		this.loanTakenDate = loanTakenDate;
		this.loanEndDate = loanEndDate;
	}

	public UserLoans() {
		super();
	}

}
