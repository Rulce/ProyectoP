package com.example.ProyectoPP.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ProyectoPP.entity.Admin;

@Repository("adminRepository")

public interface AdminRepository extends JpaRepository<Admin, Integer>{
	
	public List<Admin> findByUsuarioAndPassword(String usuario,String password);

}
