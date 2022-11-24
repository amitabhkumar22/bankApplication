package com.bankmanagemetsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.bankmanagemetsystem.models.UserDetails;

@Repository
public interface AccountDao extends JpaRepository<UserDetails, Integer> {

	@Query(value = "SELECT * FROM bank_management_system.user_details where email_id=:emailId", nativeQuery = true)
	UserDetails getDetailsByEmailId(String emailId);

}
