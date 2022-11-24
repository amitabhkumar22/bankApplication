package com.bankmanagemetsystem.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.bankmanagemetsystem.models.UserLoans;

@Repository
public interface LoanDao extends JpaRepository<UserLoans, Integer> {

	@Query(value = "SELECT * FROM bank_management_system.user_loan_details where profile_id=:profileId", nativeQuery = true)
	Optional<List<UserLoans>> findByProfileId(int profileId);

}
