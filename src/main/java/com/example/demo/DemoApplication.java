package com.example.demo;

import com.example.demo.model.Student;
import com.example.demo.repository.StudentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	CommandLineRunner commandLineRunner(StudentRepository rep){
		return args -> {
			rep.save(new Student(null,"Erik","erik2000@mail.com",28));
			rep.save(new Student(null,"Jens","jakobsenjens@mail.com",22));
			rep.save(new Student(null,"Jonas","jon20021212@mail.com",20));
		};
	}

}
