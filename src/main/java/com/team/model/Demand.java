package com.team.model;

import java.sql.Date;
import java.sql.Timestamp;

public class Demand {
	private int id;
	private String account;
	private String title;
	private String content;
	private String industry;
	private String date;
	private Users user;
	
	public Demand() {
		
	}
	
	public Demand(String account,String title,String content,String industry) {
		this.account=account;
		this.title=title;
		this.content=content;
		this.industry=industry;
		
	}
	
	public int getId(){
		return id;
	}
	public void setId(int id) {
		this.id=id;
	}
	
	public String getAccount() {
		return account;
	}
	public void setAccount(String account) {
		this.account=account;
	}
	
	public String getTitle () {
		return title;
		
	}
	public void setTitle(String title) {
		this.title=title;
	}
	
	public String getContent() {
		return content;
	}
	
	public void setContent(String content) {
		this.content=content;
	}
	
	
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date=date;
	}
	
	public Users getUsers() {
		return user;
	}
	public void setUsers(Users user) {
		this.user=user;
	}
	
	public String getIndustry() {
		return industry;
	}
	public void setIndustry(String industry) {
		this.industry=industry;
	}

}









