package com.bankmanagemetsystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bankmanagemetsystem.models.LoanDetails;

@Repository
public interface BankDao extends JpaRepository<LoanDetails, Integer> {

	List<LoanDetails> findByAccountType(String accountType);

}
