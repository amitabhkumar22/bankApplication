package com.bankmanagemetsystem.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bankmanagemetsystem.models.BaseResponse;
import com.bankmanagemetsystem.models.LoanDetails;
import com.bankmanagemetsystem.models.UserLoans;
import com.bankmanagemetsystem.services.BankService;

@RestController
@RequestMapping("/bank")
public class BankController {

	@Autowired
	private BankService service;

	@GetMapping("/getloanddetails")
	public List<LoanDetails> getLoandDetails(@RequestParam String accountType) {
		try {
			return service.getLoandDetails(accountType);
		} catch (Exception e) {
			System.out.println("exception occured while fetching loan data");
		}
		return new ArrayList<LoanDetails>();
	}

	@PostMapping("/applyloan")
	public BaseResponse applyLoan(@RequestBody UserLoans userLoans) {
		try {
			return service.applyLoan(userLoans);
		} catch (Exception e) {
			System.out.println("exception occured while applying  loan data");
		}
		return new BaseResponse("Something went wrong", 500);
	}

	@GetMapping("/getappliedloans")
	public List<UserLoans> getAppliedLoans(@RequestParam int profileId) {
		try {
			return service.getAppliedLoans(profileId);
		} catch (Exception e) {
			System.out.println("exception occured while fetching the applyind  loans data");
		}
		return new ArrayList<UserLoans>();
	}

	@PostMapping("/createbasedata")
	public BaseResponse createBaseData(@RequestBody List<LoanDetails> details) {
		return service.createBaseData(details);
	}
}
