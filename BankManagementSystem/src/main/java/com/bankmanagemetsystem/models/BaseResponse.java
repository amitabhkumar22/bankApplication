package com.bankmanagemetsystem.models;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

public class BaseResponse {

	private String statusMessage;
	private int statusCode;
	@JsonInclude(value = Include.NON_DEFAULT)
	@JsonProperty(access = Access.READ_ONLY)
	private String token;

	private UserDetails userDetails;

	public String getStatusMessage() {
		return statusMessage;
	}

	public void setStatusMessage(String statusMessage) {
		this.statusMessage = statusMessage;
	}

	public int getStatusCode() {
		return statusCode;
	}

	public void setStatusCode(int statusCode) {
		this.statusCode = statusCode;
	}

	public UserDetails getUserDetails() {
		return userDetails;
	}

	public void setUserDetails(UserDetails userDetails) {
		this.userDetails = userDetails;
	}

	public BaseResponse(String statusMessage, int statusCode) {
		super();
		this.statusMessage = statusMessage;
		this.statusCode = statusCode;
	}

	public BaseResponse(String statusMessage, int statusCode, UserDetails userDetails) {
		super();
		this.statusMessage = statusMessage;
		this.statusCode = statusCode;
		this.userDetails = userDetails;
	}

	public BaseResponse(String statusMessage, int statusCode, String token, UserDetails userDetails) {
		super();
		this.statusMessage = statusMessage;
		this.statusCode = statusCode;
		this.token = token;
		this.userDetails = userDetails;
	}

	public BaseResponse() {
		super();
	}

}
