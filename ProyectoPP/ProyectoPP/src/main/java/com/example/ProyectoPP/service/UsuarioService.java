package com.example.ProyectoPP.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.ProyectoPP.entity.Usuario;
import com.example.ProyectoPP.repository.UsuarioRepository;

@RestController
@RequestMapping("/usuario")
@CrossOrigin
public class UsuarioService {

	@Autowired
	UsuarioRepository ur;
	
	@GetMapping(path = "/buscar")
	public List<Usuario> buscarUsuario(){
		return ur.findAll();
	}
	
	@PostMapping(path="/guardar")
	public Usuario guardarUsuario(@RequestBody Usuario usuario) {
		return ur.save(usuario);
	}
	
	@PostMapping(path="/login")
	public Usuario login(@RequestBody Usuario usuario) {
		
		Usuario login = null;
		List<Usuario> usuarios = ur.findByCorreoAndPassword(usuario.getCorreo(), usuario.getPassword());
		
		if(usuarios.size()>0) {
			login = usuarios.get(0);
		}
		
		return login;
	}
	
	@GetMapping(path="/buscar/{idusuario}")
	public Usuario buscarUsuarioPorId(@PathVariable Integer idusuario){
		
		Optional<Usuario> usuario = ur.findById(idusuario);
		
		return usuario.isPresent() ? usuario.get() : null;
	}
	
	@DeleteMapping(path="/borrar/{idusuario}")
	public void borrarUsuario(@PathVariable int idusuario) {
		ur.deleteById(idusuario);
		
	}
	
}
