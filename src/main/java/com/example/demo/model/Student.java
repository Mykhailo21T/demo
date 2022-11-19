package com.example.demo.model;

import org.springframework.data.annotation.Id;

public record Student(@Id Integer id, String name, String email, int age) {
}
