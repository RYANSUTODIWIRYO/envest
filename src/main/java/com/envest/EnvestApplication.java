package com.envest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EnvestApplication {
	public static void main(String[] args) {
		SpringApplication.run(EnvestApplication.class, args);
		System.out.println("Web is running...");
	}
}
