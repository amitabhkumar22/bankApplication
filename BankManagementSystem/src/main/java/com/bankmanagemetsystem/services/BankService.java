package com.bankmanagemetsystem.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bankmanagemetsystem.exception.LoanAppException;
import com.bankmanagemetsystem.models.BaseResponse;
import com.bankmanagemetsystem.models.LoanDetails;
import com.bankmanagemetsystem.models.UserLoans;
import com.bankmanagemetsystem.repository.BankDao;
import com.bankmanagemetsystem.repository.LoanDao;

@Service
public class BankService {
	@Autowired
	private BankDao dao;
	@Autowired
	private LoanDao loanDao;

	public BaseResponse createBaseData(List<LoanDetails> details) {
		if (!dao.saveAll(details).isEmpty()) {
			return new BaseResponse("updated", 200);
		}
		return new BaseResponse("fail", 200);
	}

	public List<LoanDetails> getLoandDetails(String accountType) throws LoanAppException {
		try {
			return dao.findByAccountType(accountType);
		} catch (Exception e) {
			throw new LoanAppException("Exception occured while registering the user ", e);
		}
	}

	public BaseResponse applyLoan(UserLoans userLoans) throws LoanAppException {
		try {
			userLoans.setLoanTakenDate(System.currentTimeMillis());
			userLoans.setLoanEndDate(System.currentTimeMillis() + userLoans.getYears() * 31556952000l);
			if (loanDao.save(userLoans) != null)
				return new BaseResponse("Successfully applied for loan", 200);
		} catch (Exception e) {
			throw new LoanAppException("Exception occured while registering the user ", e);
		}
		return new BaseResponse("Something went wrong", 500);
	}

	public List<UserLoans> getAppliedLoans(int profileId) throws LoanAppException {
		try {
			Optional<List<UserLoans>> details = loanDao.findByProfileId(profileId);
			if (details.isPresent())
				return details.get();
		} catch (Exception e) {
			throw new LoanAppException("Exception occured while registering the user ", e);
		}
		return new ArrayList<UserLoans>();
	}

}