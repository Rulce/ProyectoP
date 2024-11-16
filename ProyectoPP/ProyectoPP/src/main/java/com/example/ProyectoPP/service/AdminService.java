package com.example.ProyectoPP.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ProyectoPP.entity.Admin;
import com.example.ProyectoPP.repository.AdminRepository;



@RestController
@RequestMapping("/admin")
@CrossOrigin

public class AdminService {

	@Autowired
	AdminRepository ur;
	
	@GetMapping(path = "/buscar")
	public List<Admin> buscarAdmin(){
		return ur.findAll();
	}
	
	@PostMapping(path="/guardar")
	public Admin guardarAdmin(@RequestBody Admin admin) {
		return ur.save(admin);
	}
	
	@PostMapping(path="/login")
	public Admin login(@RequestBody Admin admin) {
		
		Admin login = null;
		List<Admin> admins = ur.findByUsuarioAndPassword(admin.getUsuario(), admin.getPassword());
		
		if(admins.size()>0) {
			login = admins.get(0);
		}
		
		return login;
	}
	
	@DeleteMapping(path="/borrar/{idadmin}")
	public void borrarAdmin(@PathVariable int idadmin) {
		ur.deleteById(idadmin);
		
	}
	
}
